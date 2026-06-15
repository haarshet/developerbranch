import { LightningElement ,wire} from 'lwc';

import {CurrentPageReference} from 'lightning/navigation';

import fetchURL from '@salesforce/apex/ServiceNowAuthCntllr.fetchURL';
import getAccessToken from '@salesforce/apex/ServiceNowAuthCntllr.exchangeCodeForAccesToken';

export default class ServiceNowAuth extends LightningElement {

    @wire(CurrentPageReference) 
    getStateParameters(CurrentPageReference){
        if(CurrentPageReference){
             console.log(JSON.stringify(CurrentPageReference));
            let code = CurrentPageReference.state?.c__code;
            console.log(code);
        getAccessToken({ authCode:code})

        .then((response)=>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    
        }
    }


    changeHandler(){
        fetchURL()
        .then((response)=>{
            console.log(response)
            window.location.href=response;
        })
        .catch((error) => {
            console.log(error)
        });
    }

    
}