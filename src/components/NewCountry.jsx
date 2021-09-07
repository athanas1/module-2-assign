import React, {Component} from 'react';

class NewCountry extends Component{
    state = {
        showForm : false,
    }
    saveCountry = () => {
        var countryName = prompt("Please enter a Country name");
        if(countryName && countryName.trim().length > 0){
            console.log(countryName)
            this.props.onAdd(countryName);
        }
    }
    render() {
        
        return(
            <div className="newCountry">
                <button onClick={this.saveCountry}>Add a new Country</button>
            </div>
        );
    }
}
export default NewCountry

