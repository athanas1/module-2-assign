import React, { Component } from 'react';

class Country extends Component{
    state = {
        name : 'United States',
        goldMedalCount: 0,
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
            <div>
            {this.state.name}
            </div>
            <div>
             {'Gold Medals: ' + this.state.goldMedalCount} 
             {" "}  
             <button onClick={ this.addMedal }>+</button>
             {" "}  
             <button onClick={this.subtractMedal} className="">-</button>
            </div>
        </div>);
    }

}

export default Country;