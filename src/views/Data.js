import React from 'react';
import Button from '../components/Button.js';

class Data export React.Component{
    render (){
        return(
            <div className="contenedor-data">
                <Button name= "Personajes"/>
                <Button name= "Profesores"/>
                <select name="Casas">
                <option value="Casa1">GRYFFINDOR</option>
                <option value="Casa2">HUFFLEPUF</option>
                <option value="Casa3">RAVENCLAW</option>
                <option value="Casa4">SLYTHERIN</option>
                </select>
            </div>

        )
    }
}
export default Data;