// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import LoadingPage from './LoadingPage';
import Portfolio from './Portfolio';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 3900)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adrian YOU GOT THIS!!!!!
          please edit me to something cool ;-;
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {
        loading ? 
        <LoadingPage setLoading={setLoading}/>
        :
        <Portfolio/>
      }

      
    </div>
  );
}

export default App;
