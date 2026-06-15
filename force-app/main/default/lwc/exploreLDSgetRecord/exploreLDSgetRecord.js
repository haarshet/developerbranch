import { LightningElement ,api,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class ExploreLDSgetRecord extends LightningElement {

    @api recordId;

    accountObject = ACCOUNT_OBJECT;

    @wire (getRecord , {recordId:'$recordId' , fields: [NAME_FIELD]})
    acctRecord;

    get customNameRendering(){
       return this.acctRecord.data ? 'I AM THERE BUDDY':'No Name';
    }




}