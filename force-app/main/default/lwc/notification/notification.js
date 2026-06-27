import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notification extends LightningElement {
        toastHandlerOne(){
            this.showToastEvent('Success','{0} Account created {1}','success')

        }
        toastHandlerTwo(){
            this.showToastEvent('Error','Account not created','error')

        }

    showToastEvent(title,message,variant){
        const eve = new ShowToastEvent({ 
        title,
        message,
        variant,
        messageData:[
            'Salesforce',{
                url:'https://login.salesforce.com/',
                label:'Click Here'
            }
        ],
        mode:'sticky'
    })
        this.dispatchEvent(eve);       
    }
}