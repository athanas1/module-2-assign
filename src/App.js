import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import Counter from './components/Counter';

class App extends Component {
  state = { 
    countries: [
        { id: 1, name: 'United States', goldMedalCount: 2 , silverMedalCount: 3, bronzeMedalCount: 5},
        { id: 2, name: 'China', goldMedalCount: 3, silverMedalCount: 1, bronzeMedalCount: 4 },
        { id: 3, name: 'Germany', goldMedalCount: 0 , silverMedalCount: 6, bronzeMedalCount: 2},
      ]
}

addGoldMedal = (id) => {

  const countriesMutable = [...this.state.countries]
  const idx = countriesMutable.findIndex((c) => c.id === id)
  
  this.setState({goldMedalCount: countriesMutable[idx].goldMedalCount +=1})
  
}
addSilverMedal = (id) => {

  const countriesMutable = [...this.state.countries]
  const idx = countriesMutable.findIndex((c) => c.id === id)
  
  this.setState({silverMedalCount: countriesMutable[idx].silverMedalCount +=1})

}
addBronzeMedal = (id) => {

  const countriesMutable = [...this.state.countries]
  const idx = countriesMutable.findIndex((c) => c.id === id)
  
  this.setState({bronzeMedalCount: countriesMutable[idx].bronzeMedalCount +=1})

}

subtractGoldMedal = (id) =>{

  const countriesMutable = [...this.state.countries];

  const idx = countriesMutable.findIndex((c) => c.id === id);

  if(this.state.goldMedalCount >= 1){
    this.setState({goldMedalCount: countriesMutable[idx].goldMedalCount -= 1}) 
  }
}
subtractSilverMedal = (id) =>{

  const countriesMutable = [...this.state.countries];

  const idx = countriesMutable.findIndex((c) => c.id === id);

  if(this.state.silverMedalCount >= 1){
    this.setState({silverMedalCount: countriesMutable[idx].silverMedalCount -= 1}) 
  }
}
subtractBronzeMedal = (id) =>{

  const countriesMutable = [...this.state.countries];

  const idx = countriesMutable.findIndex((c) => c.id === id);

  if(this.state.bronzeMedalCount >= 1){
    this.setState({bronzeMedalCount: countriesMutable[idx].bronzeMedalCount -= 1}) 
  }
}
 
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          Olympics WOW VERY COOL
        </header>
        <Countries countries={ this.state.countries} onGoldIncrement ={this.addGoldMedal} onGoldDecrement= {this.subtractGoldMedal}
        onSilverIncrement= {this.addSilverMedal} onSilverDecrement= {this.subtractSilverMedal} onBronzeIncrement = {this.addBronzeMedal} onBronzeDecrement = {this.subtractBronzeMedal}
        />
        <Counter totalMedals={this.state.countries.reduce((a, b) => a + b.goldMedalCount, 0) 
          + this.state.countries.reduce((a, b) => a + b.silverMedalCount, 0) 
          + this.state.countries.reduce((a, b) => a + b.bronzeMedalCount, 0) 
           } 
           goldMedals= {this.state.countries.reduce((a, b) => a + b.goldMedalCount, 0) }
           silverMedals = {this.state.countries.reduce((a, b) => a + b.silverMedalCount, 0) }
           bronzeMedals = {this.state.countries.reduce((a, b) => a + b.bronzeMedalCount, 0) }
           />
      </div>
     );
  }
}
 
export default App;
