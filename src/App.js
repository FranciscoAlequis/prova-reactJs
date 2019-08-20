import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Depu from './components/rotas/Depu';
import Navegation from './components/rotas/Navegation';
import About from './components/rotas/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navegation}/>
        <Route path='/deputados' exact component={Depu}/>
        <Route path='/sobre' exact component={About}/>
        <Route path='/deputados/:id' component={About}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
