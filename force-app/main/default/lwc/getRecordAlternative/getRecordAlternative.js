import { LightningElement ,wire, api} from 'lwc';

import { getRecord} from 'lightning/uiRecordApi'

const FIELDS =[
    'Account.Name',
    'Account.Rating',
    'Account.Industry'
]
export default class GetRecordAlternative extends LightningElement {

    @api recordId

    @wire(getRecord , {recordId : '$recordId' , fields :FIELDS} ) 
    record;

    get name(){
        return this.record.data.fields.Name.value;
    }

    get rating(){
        return this.record.data.fields.Rating.value;
    }
    get industry(){
        return this.record.data.fields.Industry.value;
    }

    

}