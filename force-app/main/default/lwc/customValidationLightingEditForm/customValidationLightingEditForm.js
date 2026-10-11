import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomValidationLightingEditForm extends LightningElement {

    objectName = ACCOUNT_OBJECT;
    inputValue='';

    handleChange(event){
        this.inputValue = event.target.value;
    }

    handlesubmit(event){
        event.preventDefault();
        const inputcmp = this.template.querySelector('lightning-input');
        const value = inputcmp.value;
        if(!value.includes('Australia')){
            inputcmp.setCustomValidity('Name must include Australia');

        }else{
            inputcmp.setCustomValidity('');
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);

        }
        inputcmp.reportValidity();
    }
    successHandler(event){
        console.log('inside success handler')
        const toastEvent = new ShowToastEvent({
            title:"Account is Created",
            message:"Record Id: " + event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent);
    }

    errorHandler(event){
           const toastEvent = new ShowToastEvent({
            title:"Error on Account Creation",
            message:event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent);
    }
    
}