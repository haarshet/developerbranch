import { LightningElement , wire } from 'lwc';
import fetchSortedData from '@salesforce/apex/serverSortingController.fetchSortedData';

const columns = [
    {label:'Id', fieldName: 'Id', type:'text', sortable: true},
    {label:'Name', fieldName: 'Name', type:'text', sortable: true},
    {label:'Amount', fieldName: 'Amount', type:'Number', sortable: true}
    
]

export default class ServerSortingcmp extends LightningElement {


    data;
    columns = columns;
    sortedBy='Name';
    sortedDirection = 'asc';

    @wire(fetchSortedData ,({sortedBy:'$sortedBy',sortDirection:'$sortedDirection'}))
   
    wiredData({data, error}){
        if(data){
            this.data=data;

        }else{
            console.log('Error'+error);

        }

    }

    handleSort(event){
        this.sortedBy = event.detail.fieldName;
        console.log('sortedBy'+this.sortedBy);
        this.sortedDirection = event.detail.sortDirection;
        console.log('sortedBy'+this.sortedDirection);
        
    }


}