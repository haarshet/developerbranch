import { LightningElement, wire } from 'lwc';
import fetchContactData from '@salesforce/apex/RecordPickerController.fetchContactData'

const filter = {
    criteria :[
        {
            fielPath :'Industry',
            operator:'eq',
            value:'Agriculture'
        },
        {
            fielpath : 'Type',
            operator : 'eq',
            value: 'Prospect'
        }

    ]
}

const matchingInfo = {
    primaryField : {fieldpath : 'Name'},
    additionalFields : [{fieldpath : 'Phone'}]
}

const columns = [
    {label : 'FirstName', fieldName: 'FirstName',type:'text'},
    {label : 'LastName', fieldName: 'LastName',type:'text'},
    {label : 'Phone', fieldName: 'Phone',type:'text'}
]

export default class RecordPickercmp extends LightningElement {

    accId;
  //filter=filter;
  //matchingInfo = matchingInfo;
    columns = columns;
    dataTable;



    handleAccountChange(event){
        this.accId = event.detail.recordId;
        this.getRelatedRecord();
    }

    getRelatedRecord(){
        console.log('inside related Records');
        fetchContactData({accId : this.accId})
        .then((result)=> {
            this.dataTable = result;
            console.log('inside related Records'+JSON.stringify(this.dataTable));
        })
        .catch((error) => {
            this.error=error;
            console.log(error); 
        })
    }
}