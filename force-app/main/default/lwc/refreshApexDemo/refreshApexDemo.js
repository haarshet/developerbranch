import { LightningElement,wire } from 'lwc';
import getAcccountList from '@salesforce/apex/refreshApexMethod.getAcccountList';
import{updateRecord} from 'lightning/uiRecordApi';
import {showToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
const columns = [
    {label:'Name',fieldName:'Name',editable:true},
    {label:'Industry',fieldName:'Industry',editable:true},
    
];
export default class RefreshApexDemo extends LightningElement {
columns = columns;
draftValues = [];


@wire (getAcccountList)
wiredAccount;

get isContactAvailable(){
    console.log(JSON.stringify(this.wiredAccount));
    return this.wiredAccount.data && this.wiredAccount.data.length> 10 ?'Yes':'No';
}

handleSave(event){
    console.log(event.detail.draftValues);
    const recordInput = event.detail.draftValues.slice().map(draft => {
        const fields = Object.assign({},draft);
        return {fields};
    })
    console.log('recordInput',recordInput);
    const promises = recordInput.map(record => updateRecord(record));
    Promise.all(promises).then((result)=>{
            showToastMsg('Sucesss','Records updated successfully','success')
            this.draftValues=[];
            return refreshApex(this.wiredAccount);
    })
    .catch((error)=>{
        showToastMsg('Error',error.body.message,'Error')
    })
  
}

showToastMsg(title,message,variant){
    this.dispatchEvent(new showToastEvent({
        title:title,
        message:message,
        variant:variant || Success
    }))
}
}