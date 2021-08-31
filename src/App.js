import React, { Component } from 'react';
import './App.css';
//import Countries from './components/Countries';
import Country from './components/Country';
import Medal from './components/Medal';
import { getCountries } from './services/countryService';

class App extends Component {
  state = { 
    countries: getCountries(), 
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
 
componentDidMount() {
  console.log("App mounted");
}
  render() { 
    const {countries} = this.state;
    return ( 
      <div className="App">
        <header className="App-header">
          Olympics WOW VERY COOL
        </header>
        {/* <Countries countries={ this.state.countries} onGoldIncrement ={this.addGoldMedal} onGoldDecrement= {this.subtractGoldMedal}
        onSilverIncrement= {this.addSilverMedal} onSilverDecrement= {this.subtractSilverMedal} onBronzeIncrement = {this.addBronzeMedal} onBronzeDecrement = {this.subtractBronzeMedal}
        /> */}               
        {countries.map(name => 
          <Country 
          onGoldIncrement = {this.addGoldMedal}
          onGoldDecrement = {this.subtractGoldMedal}
          onSilverIncrement = {this.addSilverMedal}
          onSilverDecrement = {this.subtractSilverMedal}
          onBronzeIncrement = {this.addBronzeMedal}
          onBronzeDecrement = {this.subtractBronzeMedal}
          key = { name.id}
          name = {name}    
          />)}
        <Medal totalMedals={countries.reduce((a, b) => a + b.goldMedalCount, 0) 
          + countries.reduce((a, b) => a + b.silverMedalCount, 0) 
          + countries.reduce((a, b) => a + b.bronzeMedalCount, 0) 
           } 
           goldMedals= {countries.reduce((a, b) => a + b.goldMedalCount, 0) }
           silverMedals = {countries.reduce((a, b) => a + b.silverMedalCount, 0) }
           bronzeMedals = {countries.reduce((a, b) => a + b.bronzeMedalCount, 0) }
           />
      </div>
     );
  }
}
 
export default App;
