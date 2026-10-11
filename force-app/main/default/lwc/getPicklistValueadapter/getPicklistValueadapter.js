import { LightningElement,wire } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class GetPicklistValueadapter extends LightningElement {
   
    selectIndustry='';
    industryOptions=[];

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectName;
   


    @wire(getPicklistValues, { recordTypeId: '$objectName.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryPicklist({data,error}){

        if(data){
            console.log('data',data);
            this.generatePicklist(data);
            this.industryOptions=[...this.generatePicklist(data)];
        }if(error){
            console.log('error',error);
        }
    }


    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
     
    handleChange(event){
        this.selectIndustry = event.detail.value;
    }
}
