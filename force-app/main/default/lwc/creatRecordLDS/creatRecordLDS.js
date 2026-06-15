import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import {createRecord} from 'lightning/uiRecordApi'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CreatRecordLDS extends LightningElement {

name='';

  handleChange(event){

    this.name = event.target.value;
    console.log('name',this.name);
   }

   handleClick(){
        //1. Assign the values to the field
        console.log('inside click');
        const fields = {};
         fields [NAME_FIELD.fieldApiName] = this.name;

        //2.configure the object and field
        const recordInput = {
            apiName:ACCOUNT_OBJECT.objectApiName,
            fields
        }

        //3. create Record
        createRecord(recordInput)
          .then(account => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success!!',
                    message:account.id,
                    variant: 'success'

                })

                
            );
        
          })

          .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Error',
                    message:error.body.message,
                    variant:'error'
                })
            );
          })

        

   }

}