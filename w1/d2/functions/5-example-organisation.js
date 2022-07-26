function installSpaceTelescope() {
  const spaceTelescope = buildSpaceTelescope()
  addScrewToInsideLeftPanel19()
  launch(spaceTelescope)
}

function buildSpaceTelescope() {
  addOpticalComponents()
  addScientificEquipment()
  addSunShield()
}

function addOpticalComponents() {
  const primaryMirror = buildPrimaryMirror()
  const secondaryMirror = buildSecondaryMirror()
  primaryMirror.mount(secondaryMirror)
}

function addScientificEquipment() {
  // TODO: write this function
}

function addSunShield() {
  throw new Error('sunshield not created yet')
}

function buildPrimaryMirror() {
  buildMirrors(18)
}

function buildTelescope() {
  const miror1 = new Mriror()
  for (let i = 0; i < 17; i++) {
    const mirror = new Mirror()
    miror1.add(mirror)
  }
  foldSunhield()
}
