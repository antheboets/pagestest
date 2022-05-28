import logo from './logo.svg';
import './App.css';
import LocalizedStrings from 'react-localization';
import localizationData from './localization/localization.js';
import React from 'react';

function App() {

  React.useEffect(()=>{
    console.log("print only one time")
  },[])

  let strings = new LocalizedStrings(localizationData);
  strings.setLanguage('nl');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{strings.getLanguage() + ": "  + strings.hope}</p>
      </header>
    </div>
  );
}

export default App;
