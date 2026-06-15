import { LightningElement,api ,wire} from 'lwc';

import getAccounts from '@salesforce/apex/LWCAccountController.getAccounts';

import { publish, MessageContext } from 'lightning/messageService';
import accountMessageChannel from '@salesforce/messageChannel/viewAccountContactChannel__c';

const COLUMNS = [
    { label:'Id', fieldName:'Id' },
    { label:'Name', fieldName:'Name' },
     { label:'Actions', type:'button',typeAttributes:{
        label:'view Contacts',
        name:'View Contacts',
        title:'View Contacts',
        value:'View_Contacts'
     } },

];
export default class AccountSearchResult extends LightningElement {
    columns=COLUMNS;
    @api accountText;
    accountList;
   
    @wire(getAccounts,{accountsText:'$accountText'}) 
    accountList;
    
    @wire(MessageContext)
    messageContext;


    rowActionHandler(event){
        if(event.detail.action.value=='View_Contacts'){
            const payload = { accountId: event.detail.row.Id,accountName: event.detail.row.Name};

            publish(this.messageContext, accountMessageChannel, payload);
            console.log('from publisher')
        }
    }








       
}