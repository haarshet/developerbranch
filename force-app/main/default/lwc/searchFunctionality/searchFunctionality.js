import { LightningElement , wire } from 'lwc';
import fetchAccRecord from '@salesforce/apex/SearchFunctionality.fetchAccRecord';


const columns = [
    {label:"Name", fieldName:"Name", type:"text"},
    {label:"Id", fieldName:"Id", type:"text"}
    
]

export default class SearchFunctionality extends LightningElement {

    columns = columns;
    dataTable;
    SearchKey= '';

    @wire(fetchAccRecord,({SearchKey:'$SearchKey'}))
    wiredData({error,data}) {
        if(data){
            this.dataTable = data;
        }else{
            console.log('error'+error)
        }
    }

    handleSearch(event){

        this.SearchKey= event.target.value;

    }



}