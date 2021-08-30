import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';




class Country extends Component{
    // state = {
    //     name : this.props.name.name,
    //     goldMedalCount: this.props.name.goldMedalCount,
    // }
    // addMedal= () => {
    //      this.setState({goldMedalCount: this.state.goldMedalCount + 1})
        
    // }
    // subtractMedal = () =>{
    //     if(this.state.goldMedalCount >= 1){
    //     this.setState({goldMedalCount: this.state.goldMedalCount - 1})
    //     }
    // }
    
    
    render() {
        const{onGoldIncrement, onGoldDecrement,onSilverIncrement,onSilverDecrement, onBronzeIncrement, onBronzeDecrement, name} = this.props;
        return(
        <div>
            <Paper elevation={2} className="paper" >
            <div className = 'country'>
            {name.name} - {name.goldMedalCount + name.silverMedalCount + name.bronzeMedalCount}
            </div>
            <div className = 'medals'>
            <br></br>
             {'Gold Medals: ' + name.goldMedalCount} 
             {" "}  
             <button onClick={ () => onGoldIncrement(name.id) }><ArrowUpwardIcon /></button>
             {" "}  
             <button onClick={ () => onGoldDecrement(name.id)}><ArrowDownwardIcon /></button>
             {'Silver Medals: ' + name.silverMedalCount} 
             {" "}  
             <button onClick={ () => onSilverIncrement(name.id) }><ArrowUpwardIcon /></button>
             {" "}  
             <button onClick={ () => onSilverDecrement(name.id)}><ArrowDownwardIcon /></button>
             {'Bronze Medals: ' + name.bronzeMedalCount} 
             {" "}  
             <button onClick={ () => onBronzeIncrement(name.id) }><ArrowUpwardIcon /></button>
             {" "}  
             <button onClick={ () => onBronzeDecrement(name.id)}><ArrowDownwardIcon /></button>
            </div>
            <br></br>
            </Paper>
        </div>);
    }

}

export default Country;