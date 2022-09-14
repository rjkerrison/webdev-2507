const state = {}
const effects = {}
const renderContext = {
  stateIndex: 0,
  effectIndex: 0,
  currentComponent: null,
}

const runAllCleanup = () => {
  Object.values(effects).forEach((effectsByComponent) => {
    effectsByComponent.forEach((effect) => {
      effect.cleanup()
    })
  })
}

const render = (component) => {
  renderContext.stateIndex = 0
  renderContext.effectIndex = 0
  renderContext.currentComponent = component
  return component()
}

class Effect {
  constructor(callback, dependencyArray) {
    this.callback = callback
    this.dependencyArray = dependencyArray
    this._shouldRun = true
  }

  runIfNecessary() {
    if (this._shouldRun) {
      this._cleanup = this.callback()
    }
  }

  cleanup() {
    this._cleanup?.()
  }

  isDependencyArrayChanged(dependencyArray, callback) {
    if (dependencyArray.length !== this.dependencyArray.length) {
      throw new Error(
        'The dependency array has changed length. This should not happen.'
      )
    }

    this._shouldRun = dependencyArray.some((dependency, i) => {
      return dependency !== this.dependencyArray[i]
    })

    if (this._shouldRun) {
      console.log('USE EFFECT TRIGGERED')
      // We need to run the cleanup for the previous effect
      this.cleanup()
      // We need the new callback with the new values
      this.callback = callback
    }

    return this._shouldRun
  }
}

const useEffect = (callback, dependencyArray) => {
  const { currentComponent, effectIndex } = renderContext

  if (!effects[currentComponent]) {
    effects[currentComponent] = []
  }
  if (!effects[currentComponent][effectIndex]) {
    effects[currentComponent][effectIndex] = new Effect(
      callback,
      dependencyArray
    )
  } else {
    effects[currentComponent][effectIndex].isDependencyArrayChanged(
      dependencyArray,
      callback
    )
  }

  effects[currentComponent][effectIndex].runIfNecessary()

  renderContext.effectIndex++
}

const useState = (value) => {
  const updater = (value) => {
    state[renderContext.currentComponent] = value
    components.current = render(renderContext.currentComponent)
  }

  if (!state[renderContext.currentComponent]) {
    state[renderContext.currentComponent] = value
  }

  return [state[renderContext.currentComponent], updater]
}

const MyComponent = () => {
  const [a, setA] = useState(5)
  console.log(a)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setA(a + 1)
      console.log(a)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [a])

  return `SOME JSX ${a}`
}

const components = {
  current: render(MyComponent),
}

const interval = setInterval(() => {
  console.log(components.current)
}, 500)

setTimeout(() => {
  clearInterval(interval)
  runAllCleanup()
}, 2500)
