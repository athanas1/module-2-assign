import React, { Component } from 'react';
import './App.css';
//import Countries from './components/Countries';
import Country from './components/Country';
import { getCountries } from './services/countryService';
import { getMedals} from './services/medalService';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  state = { 
    countries: getCountries(),
    medals: getMedals(), 
}

addMedal = (id, medal) => {

  const countriesM = [...this.state.countries]
  const idx = countriesM.findIndex((c) => c.id === id)
  
  countriesM[idx][medal + 'MedalCount'] += 1
  this.setState({ countries: countriesM});
  
}

subtractMedal = (id, medal) =>{

  const countriesM = [...this.state.countries]
  const idx = countriesM.findIndex((c) => c.id === id)
  
  
  if(countriesM[idx][medal + 'MedalCount'] >= 1){
    countriesM[idx][medal + 'MedalCount'] -= 1
    this.setState({ countries: countriesM});
  }
}
getAllTotal(){
  var x = 0;
    this.state.medals.forEach(medal => {
      x += this.state.countries.reduce((a, b) => a + b[medal.type + "MedalCount"],0);
    });
  return x;
}
componentDidMount() {
  console.log("App mounted");
}
  render() { 
    const {countries} = this.state;
    return ( 
      <React.Fragment>
      <div className="App">
        <header className="App-header">
         Olympics
        </header>              
        {countries.map(country => 
          <Country 
          key = { country.id}
          country = {country}  
          onIncrement = {this.addMedal}
          onDecrement = {this.subtractMedal}
          medals = {this.state.medals}
          />)}
          <Paper elevation={2} className="paper" >
          <span className="counter">
           All medals from all countries { this.getAllTotal()}
          </span>
          </Paper>
      </div>
      </React.Fragment>
     );
  }
}
 
export default App;
