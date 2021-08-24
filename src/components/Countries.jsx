import React, { Component } from 'react';
import Country from './Country';

class Countries extends Component {
    state = { 
        countries: [
            { id: 1, name: 'United States', goldMedalCount: 2 },
            { id: 2, name: 'China', goldMedalCount: 3 },
            { id: 3, name: 'Germany', goldMedalCount: 0 },
          ]
    }
//     addMedal= () => {
//         this.setState({goldMedalCount: this.state.goldMedalCount + 1}) 
//    }
    render() {
        return (
            <React.Fragment>
                {this.state.countries.map(name => 
                <Country 
                onIncrement = {this.addMedal}
                key = { name.id}
                name = { name.name}
                goldMedalCount = { name.goldMedalCount}/>)}
            </React.Fragment>    
        )
    }
}
export default Countries