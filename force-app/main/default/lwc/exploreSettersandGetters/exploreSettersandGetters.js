import { LightningElement } from 'lwc';

export default class ExploreSettersandGetters extends LightningElement {

    welcomeMessage = "Hey Salesforce Casts";
    finalMessage;
    get message(){
        return this.welcomeMessage;
    }

    set message(value){
        this.finalMessage = value.toUpperCase();
   }    
        
    handleChange(event){
        this.message = event.target.value;
    }
}