import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import {loadScript} from 'lightning/platformResourceLoader';

export default class ThirdPartyJsLibrary extends LightningElement {
    currentDate;

    renderedCallback(){

        loadScript(this, MOMENT+'/moment/moment.min.js').then(()=>{
            this.setDateOnScreen()
        }).catch(()=>{
            console.error(error)
        })

    }

    setDateOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
    
}