import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Data from '../components/Data';
import Home from '../views/Home.js';

<Route path="/Home" componet={Home}/>
function App() {

  return (
    <BrowserRouter> 
     <Route path="/Home" componet={Home}/>
    <Route path="/Home" componet={Home}/>
    
    </BrowserRouter>
    // <div className="App">
    //   holi
    //   <Data/>
    // </div>
  );
}

export default App;
