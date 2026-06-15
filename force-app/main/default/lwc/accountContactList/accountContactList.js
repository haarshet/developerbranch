import { LightningElement ,wire} from 'lwc';
    import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import accountMessageChannel from '@salesforce/messageChannel/viewAccountContactChannel__c';
import getContacts from '@salesforce/apex/LWCAccountController.getContacts';
import {deleteRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningConfirm from 'lightning/confirm';

export default class AccountContactList extends LightningElement {
    subscription=null;
    accountId;
    accountName;
    contacts=[];
    title= 'Contacts';
    editableContactId;
    isShowModalPopup=false;

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    get isAccountSelected(){
        console.log('in isAccountSelected');
        return this.accountId ? true: false;
    }

    get hasContacts(){
        console.log('in has contacts');
        return this.contacts?.length >0;
        
    }

    async getAcccountcontacts(){
        const data= await getContacts({accountId:this.accountId});
        this.contacts =data;
        console.log('data',this.contacts);
    }

    disconnectedCallback(){
        this.unsubscribeToMessageChannel();
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                accountMessageChannel,
                (data) => this.handleAccountSelection(data),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleAccountSelection(data){
        this.accountId=data.accountId;
        this.title=`${data.accountName}'s contacts`;
        console.log('Id---',this.accountId);
        console.log('title---',this.title);
         this.getAcccountcontacts();

    }

    editContactHandler(event){
        this.editableContactId=event.target.dataset.contactId;
        this.isShowModalPopup=true;
        //this.getAcccountcontacts();
    }

    async deleteContactHandler(event){
        let contactId=event.target.dataset.contactId;
        const result = await LightningConfirm.open({
            message: 'Are you sure you want to delete the record',
            variant: 'headerless',
            label: 'Confirmation',
            // setting theme would have no effect
        });
        if(result){
            let deleteContact= await deleteRecord(contactId);
            this.showToast('Contact Deleted','Contact Deleted Successfully','success');
            console.log('inside delete');
            this.getAcccountcontacts();
            
        }   
    }
    

    addContactHandler(){
        this.isShowModalPopup=true;
    }

    popupCloseHandler(event){
        this.isShowModalPopup=false;
         this.editableContactId =null;
    }

    successHandler(){
        this.popupCloseHandler();
        this.getAcccountcontacts();
        console.log('inside success handler')
        
    }

    showToast(title, message,variant) {
    const event = new ShowToastEvent({
        title,
        message,
        variant
            
    });
    this.dispatchEvent(event);
    }
    

}