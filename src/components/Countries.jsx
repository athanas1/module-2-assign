import React, { Component } from 'react';
import Country from './Country';

class Countries extends Component {

   
    render() {
        const {countries, onGoldIncrement, onGoldDecrement, onSilverIncrement, onSilverDecrement, onBronzeIncrement, onBronzeDecrement} = this.props;
        return (
            <React.Fragment>
                {countries.map(name => 
                <Country 
                onGoldIncrement = {onGoldIncrement}
                onGoldDecrement = {onGoldDecrement}
                onSilverIncrement = {onSilverIncrement}
                onSilverDecrement = {onSilverDecrement}
                onBronzeIncrement = {onBronzeIncrement}
                onBronzeDecrement = {onBronzeDecrement}
                key = { name.id}
                name = {name}    
                />)}
            </React.Fragment>    
        )
    }
}
export default Countries