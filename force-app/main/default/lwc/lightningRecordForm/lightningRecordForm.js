import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class LightningRecordForm extends LightningElement {

    objectName=ACCOUNT_OBJECT;
    fieldList=[NAME_FIELD,ANNUAL_REVENUE]

    
    successHandler(event){
        console.log(event.detail.Id);
        constEvent = new ShowToastEvent({
            title:"Account created",
            message:"Record Id "+ event.detail.Id,
            variant:"Success"
        })
        this.dispatchEvent(toastEvent);

    }
}