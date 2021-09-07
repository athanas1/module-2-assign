import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';


import Medal from './Medal';




class Country extends Component{
    //going over the medals array and for each medal we add the amount of medals based on the country and medal var
    getMedalsTotal(country, medals){
        var x = 0;
        medals.forEach(medal => { 
            x += country[medal.type + "MedalCount"]
        })
        return x;
    }
    
    render() {
        const{onIncrement, country, medals, onDecrement,onDelete} = this.props;
        return(
        <div>
            <Paper elevation={2} className="paper" >
                <div className="country">
                    {country.name}
                    <br></br>
                     Total Medals: { this.getMedalsTotal(country, medals) }
                     <br></br>
                </div>
                <div className="deleteButton">
                <button  onClick ={() => onDelete(country.id)}>Delete { country.name}</button>
                </div>
            <br></br>
            </Paper>

            {medals.map(medal =>
                <Medal
                    key = {medal.id}
                    country={country}
                    medal= { medal }
                    onIncrement = {onIncrement}
                    onDecrement = {onDecrement}
                />
                ) }
                
        </div>
        );
    }

}

export default Country;