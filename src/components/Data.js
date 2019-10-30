import React, {Fragment, Component} from 'react';



class Data extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const key = '$2a$10$uNOicCW8napqdAW709LFZ.H2zi05arlA9mLTa1re9jKeTCAhJWnzW';
    const url = new URL('https://www.potterapi.com/v1/characters/')
    const params = {
      key: key
    }


    // Agrega tu key como parametro a la url a la cual haremos la peticion
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    // funcion que realiza la peticion
    //  const fetchHarryPotterData = () => {
    fetch(url)
      .then(response => {
        let data = response.json()
          .then(res => {
            printDataToConsole(res);
            this.setState({
              data: res
            })
          })
      })
    //  }

    // fetchHarryPotterData();

    // funcion que recibe la data
    const printDataToConsole = (data) => {
      console.log("DATA:", data);
    }
  }


  render() {


    return (
      <Fragment>
        {this.state.data.map(caracter => <p>{caracter.name}</p>)}
      </Fragment>

    );
  }
}

export default Data;