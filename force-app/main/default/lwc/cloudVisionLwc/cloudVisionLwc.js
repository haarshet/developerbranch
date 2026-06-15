import { LightningElement } from 'lwc';
import getCloudVision from '@salesforce/apex/salesforceCloudVision.getCloudVision';
export default class CloudVisionLwc extends LightningElement {

    handleclick(){
    getCloudVision()
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((error)=>{
        console.log(error);
    })
}



}