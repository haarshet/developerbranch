import { LightningElement, wire , track} from 'lwc';
import fetchData from '@salesforce/apex/ClientSortingElm.fetchData';

const Columns = [
    {label:'Id' , fieldName: 'Id', type:'text', sortable: true},
    {label:'Opportunity Name', fieldName: 'Name', type:'text',sortable: true},
    {label:'Amount' , fieldName: 'Amount', type:'Number',sortable: true}
   ]

export default class ClientSortingElm extends LightningElement {

   @track data=[];
   columns = Columns;
   sortedBy;
   sortedDirection;


 @wire(fetchData)
wiredData({data, error}){
    if(data){
        this.data = data;
        console.log('data'+ JSON.stringify(data));
        
    }
    else if(error){
        console.log('error');
    }

}

handleSort(event){
    const {fieldName,sortDirection} = event.detail;
    console.log('eventdetail'+JSON.stringify(event.detail));
    this.sortedBy = fieldName;
    this.sortedDirection = sortDirection;
    this.sortData(fieldName,sortDirection);

}

sortData(field,direction){
    console.log('inside the sort')
    let sortResult = [...this.data];

    sortResult.sort((a,b)=>{
        let valueA = a [field];
        let valueB = b [field];
        
        if(typeof valueA === 'String' && typeof valueB === 'String'){
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
            }

        if (valueA > valueB){

            return direction === 'asc'? 1: -1;

        }
        else if (valueA < valueB){
            return direction === 'asc'? -1: 1;
        }

        return 0;
    
    });

    this.data = sortResult;
}
}