import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'

export default class RecordEditForm extends LightningElement {
    objectName=CONTACT_OBJECT;
    fields ={
        account:ACCOUNT_FIELD,
        name: NAME_FIELD,
        phone:PHONE_FIELD,
        email: EMAIL_FIELD,

    }

    handleReset(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            Array.from(inputFields).forEach(field=>{
                field.reset()
            })
        }
    }

}