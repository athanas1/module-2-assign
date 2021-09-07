let countries = [ 

    { id: 1, name: 'United States', goldMedalCount: 2 , silverMedalCount: 3, bronzeMedalCount: 5},
    { id: 2, name: 'China', goldMedalCount: 3, silverMedalCount: 1, bronzeMedalCount: 4 },
    { id: 3, name: 'Germany', goldMedalCount: 0 , silverMedalCount: 6, bronzeMedalCount: 2},
]
export function getCountries(){
    return countries;
}
export function addCountry(name){
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    countries = countries.concat({ id: id, name:name, goldMedalCount:0, silverMedalCount:0, bronzeMedalCount:0 });
    
}
export function deleteCountry(countryID){
    countries = countries.filter(c => c.id !== countryID);
}