import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';

export default class CustomPermission extends LightningElement {

    get hasViewAllDataAccess(){
        return hasViewAllData;
    }

}