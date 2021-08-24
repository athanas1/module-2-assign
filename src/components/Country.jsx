import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';




class Country extends Component{
    state = {
        name : this.props.name,
        goldMedalCount: this.props.goldMedalCount,
    }
    addMedal= () => {
         this.setState({goldMedalCount: this.state.goldMedalCount + 1})
        
    }
    subtractMedal = () =>{
        if(this.state.goldMedalCount >= 1){
        this.setState({goldMedalCount: this.state.goldMedalCount - 1})
        }
    }
    
    
    render() {
        
        return(
        <div>
            <Paper elevation={2} className="paper" >
            <div className = 'country'>
            {this.state.name}
            </div>
            <div className = 'medals'>
             {'Gold Medals: ' + this.state.goldMedalCount} 
             {" "}  
             <button onClick={ this.addMedal }><ArrowUpwardIcon /></button>
             {" "}  
             <button onClick={this.subtractMedal}><ArrowDownwardIcon /></button>
            </div>
            </Paper>
        </div>);
    }

}

export default Country;