import { LightningElement,wire } from 'lwc';

import {    registerListener,unregisterAllListeners} from 'c/pubSubLibrary';

import { CurrentPageReference } from 'lightning/navigation';

// This is a child components of lightning pubsub model ,where they don't have any hierachial relationship.

export default class LightningsubscribeModel extends LightningElement {

    @wire(CurrentPageReference) pageRef ;

    connectedCallback(){
        registerListener("Send Data",this.handleCallback,this);
    }


    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleCallback(data){
        console.log(data);
        

    }
}