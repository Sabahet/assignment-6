
import './App.css';
import React from 'react'
//import Result from "./components/Results"
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

class App extends React.Component  {
constructor(){
  super()
  this.state ={
  city: [],
  state:[],
  loc:[],
  pop:[],
  zip:[],
  cityName: []


  }

}

getZip(e){
  e.preventDefault();
  let foundZip = (e.target.zip.value)
  fetch ("http://ctp-zip-api.herokuapp.com/zip/" +foundZip)
  .then(response => response.json())
  //console.log(response)
  .then (res => this.setState({city: [...res],state: [...res],pop: [...res],loc: [...res]}))
  .catch (error => console.log(error))
//console.log(city)
}

getZipcodes(e){
e.preventDefault();
let foundZip = (e.target.zipcode.value)
foundZip = foundZip.split(" ").join("").toUpperCase();
fetch ("http://ctp-zip-api.herokuapp.com/city/" +foundZip)
  .then(response => response.json())
  .then (res => this.setState({zip: [...res] }))
  .catch (error => console.log(error))
}


render(){
  return (

    <div className="App">

      <header className="App-header">

      </header>
      <br/>
      <h2 id ="header">Please Enter Zipcode For Information</h2>
        <form className = "zipSearch" onSubmit = {(e)=> this.getZip(e)}>
          <input id="zip" name="zip" type="text" inputMode="numeric"/>
          <input id= "submit" name = "submit" type = "submit"/>

        </form>
    <div className = "results"> 
    <ul className = "list">
    <li>{this.state.state.map(item => <p> State: {item.State} </p> )}</li>
      <li>{this.state.city.map(item => <p> City: {item.City} </p> )}</li>
      <li>{this.state.pop.map(item => <p> Population: {item.EstimatedPopulation} </p> )}</li>
      <li>{this.state.loc.map(item => <p> Location: {item.Location} </p> )}</li>
      </ul>
    
     </div>

<div>
  <h2 className = "header2"> Enter a city and ill list the zipcodes</h2>
<form className = "zipSearch" onSubmit = {(e)=> this.getZipcodes(e)}>
          <input id="zipcode" name="zipcode" type="text" />
          <input id= "submit" name = "submit" type = "submit"/>

        </form>

        <ul className = "listzip">
    
      <li>{this.state.zip.map(item => <p> Zipcode: {item} </p> )}</li>
      </ul>
  </div>
    </div>


  );
}

}
export default App;
