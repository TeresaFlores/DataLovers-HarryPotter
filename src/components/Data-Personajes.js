import React from 'react';


class DataPersonajes extends React.Component {
  render (){
    const url = new URL('http://hp-api.herokuapp.com/api/characters ');

    // funcion que realiza la peticion
    const fetchHarryPotterPersonajes = () => {
        fetch(url)
          .then(response => {
            let data = response.json()
              .then(res => {
                printDataPersonajesToConsole(res);
            })
          }
        )
      }
    
      fetchHarryPotterPersonajes();
      
      // funcion que recibe la data
      const printDataToConsole = (data) => {
        console.log("DATA:", data);
      }

    return(
     
    );
  }
}

export default DataPersonajes;  