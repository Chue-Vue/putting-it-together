import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Chue :{
        firstName: "Chue",
        lastName: "Vue",
        age: 32,
        hairColor: "Hair Color : Black"
      },
      Rosey :{
        firstName: "Rosey",
        lastName: "Lee",
        age: 26,
        hairColor: "Hair Color : Black"
      },
      Aslan :{
        firstName: "Aslan",
        lastName: "Vue",
        age: 0,
        hairColor: "Hair Color : Black"
      },
      BaeMax :{
        firstName:"BaeMax",
        lastName: "Vue",
        age: 2,
        hairColor: "Hair Color : White"
      }
    }
  }

  render(){
    return (
      <div className="App">
        <PersonCard 
          person={this.state.Chue}
        />
        <PersonCard 
          person={this.state.Rosey}
        />
        <PersonCard 
          person={this.state.Aslan}
        />
        <PersonCard 
          person={this.state.BaeMax}
        />
      </div>
    );
  }
}

export default App;
