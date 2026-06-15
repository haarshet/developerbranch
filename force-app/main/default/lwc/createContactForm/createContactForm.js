import { LightningElement , track } from 'lwc';
import getFilteredAccountIds from '@salesforce/apex/ContactCreationController.getFilteredAccountIds';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateContactForm extends LightningElement {


    leadSource;
    @track accountIdList=[];
    SelectedAccountId;

    handlerLeadSourceChange(event){
        //console.log('seleceted lead source'+event.detail.value)
        this.leadSource=event.detail.value;
        this.fetchFilteredAccounts();
    }

    fetchFilteredAccounts(){
        getFilteredAccountIds({leadSourceValue:this.leadSource})
        .then(result=>{
            console.log(result);
            this.accountIdList = result;
        })
        .catch(error=>{
            console.log('error:',+error);
        })
    }

    get accountFilter(){

        return this.accountIdList.length > 0 ? {
            criteria:[
                {
                    fieldPath : 'Id',
                    operator: 'in',
                    value: this.accountIdList
                }
            ]
        }:null;
    }

    handleAccountChange(event){
        this.SelectedAccountId = event.detail.recordId;
    }

    handlerror(event){

        console.log('Erorr +'+ JSON.stringify(error));

    }

    handlesuccess(event){
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success',
            message:'Contact Created Successfully',
            variant:'success'
        }
        ));

        console.log('Success');
    }

    handlesubmit(event){

        event.preventDefault();
        const recordForm= this.template.querySelector('lightning-record-edit-form');

        const fields = {};

        const inputfields = recordForm.querySelectorAll('lightning-input-field');

        inputfields.forEach(field => {
            fields[field.fieldName] = field.value;
        });

        fields['AccountId'] = this.SelectedAccountId;

        this.template.querySelector('lightning-record-edit-form').submit(fields);




    }
}