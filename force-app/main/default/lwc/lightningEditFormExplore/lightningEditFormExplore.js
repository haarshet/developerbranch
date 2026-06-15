import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_FIELD from '@salesforce/schema/Account.Type';   

export default class LightningEditFormExplore extends LightningElement {
    @api recordId;
    //fields=[NAME_FIELD,PHONE_FIELD,TYPE_FIELD];

    hanldeSuccess(event){
        console.log(event.detail);
        
        const toast = new ShowToastEvent({
            title : 'Success!!',
            message : 'Record is updated!'
        })

        this.dispatchEvent(toast);
    }

    handleError(){
        console.log('Errorrr!!!');
    }

  
}