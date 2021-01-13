import React, { Component } from 'react'
import "../App.css"

class Results extends Component {
    constructor() {
        super();
        this.state = {
            foundZip,
            city: [],
            state:[],
            loc:[],
            pop:[]
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
    

    render(){
        console.log("state data: ", this.state.zipData)
        return(
            <main>
                <header id ="main-header">Zip Code Search</header>
                <form>
                    <input type="text" name="zipCode" placeholder="Zip Code" onChange={this.onChange}></input>
                </form>
                {this.state.error===true ? <div className="error">No Results</div> : this.state.zipData.map( (item,index) => (
                    <div key={index} className = "dataContainer">
                        <header className="headerContainer">{item.LocationText}</header>
                        <div className ="innerDataContainer">
                        <p>
                            <li>State: {item.State}</li>
                            <li>Location: ({item.Lat}, {item.Long})</li>
                            <li>Population (estimated): {item.EstimatedPopulation}</li>
                            <li>Total Wages: {item.TotalWages}</li>
                        </p>
                        </div>
                    </div>
                ))}
            </main>
        )
    }
}