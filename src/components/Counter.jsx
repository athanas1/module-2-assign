import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Counter extends Component {
    render() { 
        return (
            <Paper elevation={2} className="paper" >
        <div className='counter'>
            Total Medals: {this.props.totalMedals} 
            <br></br>
            -----------------------------------
            <div className='medals'>
                Total Gold Medals = {this.props.goldMedals}  
                <br></br>
                Total Silver Medals= {this.props.silverMedals}
                <br></br>
                Total Bronze Medals = {this.props.bronzeMedals}
            </div>
            </div>
            </Paper>  );
    }
}

export default Counter;