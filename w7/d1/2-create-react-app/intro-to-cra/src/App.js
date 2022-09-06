import './App.css'

// when using images in react
// we have to tell the bundler we want the image
// the bundler will include the image, and give us the new path
import paddingtonImage from './images/paddington.jpg'

import ReactPlayer from 'react-player'

import { TickerBoard as ReactTickerBoard } from 'react-ticker-board'

import MyComponent from './components/MyComponent'
import Footer from './components/Footer'
import StudentList from './components/StudentList'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robin is the best!!!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactTickerBoard
        count={2}
        size={20}
        messages={['Hello', 'I like Paddington']}
      />
      <Counter />

      <StudentList />

      {[
        <p key={1}>Paragraph 1</p>,
        <p key={2}>Paragraph 2</p>,
        <p key={3}>Paragraph 3</p>,
      ]}

      <MyComponent
        newProp={true}
        number={2}
        flavour="strawberry"
        someFunction={() => {
          console.log('HIII')
        }}
        author={{
          name: 'Robin',
          coolness: 10,
        }}
      >
        <p>some kind of content</p>
      </MyComponent>
      <Footer name={'Robin James Kerrison'} />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <picture>
        <img src={paddingtonImage} alt="Paddington" />
      </picture>
    </div>
  )
}

export default App
