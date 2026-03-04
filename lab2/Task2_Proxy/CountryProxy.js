import Countery from "./Countery.js";

export default class CountryProxy{
    constructor(){
        this.countery = new Countery();
        this.cash = null;
    }
    getCountries(){
        if(this.cash){
            return this.cash;
        }
        else{
            this.cash = this.countery.getCountries();
            return this.cash;
        }
    }
}