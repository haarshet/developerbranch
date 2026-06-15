import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NUMBER from '@salesforce/schema/Account.Account_Number__c'; 
import IFSC_CODE from '@salesforce/schema/Account.IFSC_Code__c';

export default class LoanDetailsComp extends LightningElement {
    accountNumber;
    ifscCode; 
    @api recordId;
    copyMessage;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [ACCOUNT_NUMBER, IFSC_CODE]
    })
    accountDetails({ error, data }) {
        if (data) {
            this.accountNumber = data.fields.Account_Number__c.value;
            this.ifscCode = data.fields.IFSC_Code__c.value;
        } else if (error) {
            console.error('error', error);
        }
    }

    copyAccountNumber() {
        console.log('inside Account');
        this.copyToClipboard(this.accountNumber, 'Account Number Copied');
        
    }

    copyIfscCode() {
        this.copyToClipboard(this.ifscCode, 'IFSC Code Copied');
    }

    copyToClipboard(value, message) {
        if (!value){
            console.warn('No value provided for clipboard copy.');
            return;
        }
        console.log('Attempting to copy to clipboard:', value);
        navigator.clipboard.writeText(value)
            .then(() => {
                this.copyMessage = message;
                console.log(this.copyMessage, 'inside then');
                setTimeout(() => this.copyMessage = '', 5000);
            })
            .catch((error) => {
                console.error('Copy clipboard Failed', error);
                this.copyMessage = '';
            });
    }
}