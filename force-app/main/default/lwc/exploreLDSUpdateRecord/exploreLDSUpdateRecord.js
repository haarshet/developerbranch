import { LightningElement, wire} from 'lwc';
import getContactUpdateLDS from  '@salesforce/apex/contactUpdateLDS.getContactUpdateLDS';
import ID_FIELD from '@salesforce/schema/Contact.Id'
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {updateRecord} from 'lightning/uiRecordApi'
export default class ExploreLDSUpdateRecord extends LightningElement {

    @wire(getContactUpdateLDS) contact;

    handleClick(){

        console.log('Inside submit')

        const fields={}

        fields[ID_FIELD.fieldAPIname] = this.contact.data.Id;
        fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='FirstName']").value;
        fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='LastName']").value;

        const recordInput = { fields }


        updateRecord(recordInput)
            .then(()=>{
                this.dispatchEvent(new ShowToastEvent({

                    title: 'Success',
                    message: 'contact rec updated',
                    variant: 'success'
                })
            );

            })

            .catch(error=>{

                this.dispatchEvent(new ShowToastEvent({

                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }));

            })
        
    
    }


}