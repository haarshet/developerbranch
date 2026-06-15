import { LightningElement,track} from 'lwc';
import startRequest from '@salesforce/apexContinuation/exploreApexContinuation.startRequest'
export default class ExploreApexContinuationLWC extends LightningElement {

    @track continuationResult = {}

    handleSubmit(){
        startRequest()
        .then(result => {
            console.log ('result',result);
            this.continuationResult = result;

        })
        .catch(error => {
            console.log (error);

        });

    }

}