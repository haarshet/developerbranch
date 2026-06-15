import { LightningElement, wire} from 'lwc';

import {
    subscribe,
    unsubscribe,
    MessageContext
  } from "lightning/messageService";
  import GENERAL_INFO from "@salesforce/messageChannel/GeneralInfoMessageChannel__c";

export default class AuratoLWCSubscribe extends LightningElement {

    @wire(MessageContext)
    messageContext;
    receivedInfo;
    subscriptionInfo = null;

    connectedCallback(){

        if(!this.subscriptionInfo){
            this.subscriptionInfo = subscribe(this.messageContext, GENERAL_INFO, (message) => this.handleMessage(message));
        }
        
    }

    handleMessage(message){
        this.receivedInfo = JSON.stringify(message, null, "\t");
        console.log(this.receivedInfo );

    }

    disconnectedCallback(){
        console.log('inside disconnected callback')
        if(this.subscriptionInfo){
            unsubscribe(this.subscriptionInfo);
            this.subscriptionInfo = null;
        }
    }

}