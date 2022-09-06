import './App.css'
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pick Padd Poe</h1>
        <p>Player one plays as Padd, two as Poe. Who will win? Let's-a-go!</p>
      </header>
      <main>
        <Grid />
      </main>
    </div>
  )
}

export default App
