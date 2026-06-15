import { LightningElement } from 'lwc';
import{countryCodeList} from 'c/countryCodeList';
import Currencyconverter from '@salesforce/resourceUrl/Currencyconverter';
export default class CurrencyConventerApp extends LightningElement {
    currencyImage=Currencyconverter +'/currencyConverterAssets/currency.svg'
    countryList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'AUD';
    amount ='';
    result ;
    error;

    handleChange(event) {
        const {name,value} = event.target;
        console.log('name', name);
        console.log('value', value);
        this[name]=value;
        this.result='';
        this.error='';
    }

    submitHandler(event){
        event.preventDefault();
        this.convert();
    }
    async convert(){
        const API_KEY= 'c86b47ea04611a34f487f0c1';
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
        console.log('api', API_URL);


        try{
            const data = await fetch(API_URL);
            const jsonData = await data.json();
            console.log('jsonData',jsonData);
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
            console.log('result',this.result);
            //console.log('amount',this.amount);
        }catch(error){
        console.log(error);
        this.error ='An error occurred again...please try again'
        }

    }

}