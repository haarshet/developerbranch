import { LightningElement } from 'lwc';

export default class AccountSearcgForm extends LightningElement {

searchText='';
    accountNameChangeHandler(event){
        this.searchText=event.target.value;
        //console.log(this.searchText);
        
    
    }

    searchClickHandler(){
        //console.log('inside clickhandler')
        const event = new CustomEvent('searchaccount',{
            detail: this.searchText
        });
        this.dispatchEvent(event);
    }

}