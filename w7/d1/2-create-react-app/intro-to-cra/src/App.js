import './App.css'

// when using images in react
// we have to tell the bundler we want the image
// the bundler will include the image, and give us the new path
import paddingtonImage from './images/paddington.jpg'

import ReactPlayer from 'react-player'

import { TickerBoard as ReactTickerBoard } from 'react-ticker-board'

import Button from './components/Button'
import MyComponent from './components/MyComponent'
import Footer from './components/Footer'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <picture>
          <img src={paddingtonImage} alt="Paddington" />
        </picture> */}
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
      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: 'BCN', course: 'WEB' }}
        />

        <StudentCard
          name="Mat"
          week={8}
          info={{ city: 'MIA', course: 'DATA' }}
        />
        <StudentCard
          name={'Marko'}
          week={7}
          info={{ city: 'PAR', course: 'WEB' }}
        />
      </StudentList>

      <Button text="I WAS CREATED BY A COMPONENT" />
      <Button text="Hello" />
      <Button text="Goodbye" />
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
    </div>
  )
}

export default App
