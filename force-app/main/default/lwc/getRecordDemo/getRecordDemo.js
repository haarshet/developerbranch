import { LightningElement,wire,api } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNERNAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name;
    ownerName;
    annualRevenue;
    @api recordId
 @wire(getRecord,{recordId:'$recordId',
       fields:[NAME_FIELD,OWNERNAME_FIELD,ANNUALREVENUE_FIELD]
    })
   // @wire(getRecord,{recordId:'$recordId',
       //layoutTypes:['Full'],modes:['view']})
    accountHandler({data,error}){
        if(data){   
            console.log('data',data);
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue:
            data.fields.Name.value
            this.ownerName = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:
            data.fields.ownerName.value
            this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:
            data.fields.AnnualRevenue.value
        }if(error){
            console.log(error,'error')
        }
    }

}