import React from 'react';
import Castillo from  '../img/Castillo.jpg';
import Button from '../components/Button.js';

class Home extends React.Component {
  render (){
      return(
        <div className="contenedor-home">
            <img src={Castillo}/>
            <Button name= "Personajes"/>
            
        </div>
      );
  }
}
export default Home;