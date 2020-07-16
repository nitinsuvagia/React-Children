import React from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './layout/Layout'

const location = {
  pathname:"/",
  search:''
}


function App() {
  return (
    <div className="App">
      <Layout location={location}>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <div>Passing this line from App Root File as children.</div>
        </header>
      </Layout>
    </div>
  );
}

export default App;
