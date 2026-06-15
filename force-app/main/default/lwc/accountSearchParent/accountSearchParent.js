import { LightningElement } from 'lwc';

export default class AccountSearchParent extends LightningElement {

searchText='';
    handleSearchContact(event){
        this.searchText=event.detail;
        console.log('Name',this.searchText);
    
    }

}