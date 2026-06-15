import { LightningElement, wire} from 'lwc';
import getRepos from '@salesforce/apex/ReposController.getRepos';
export default class ReposControllerLWC extends LightningElement {

    @wire(getRepos)
    wiredRepos({error, data}){

        if(data){
            console.log('data:',data);
        }
        else if(error){
            console.log('error',error);
        }
    }

}