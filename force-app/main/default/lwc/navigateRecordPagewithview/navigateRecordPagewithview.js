import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToHome extends NavigationMixin(LightningElement)  {

    navigateToRecordPageWithView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'003J400000R9TroIAF',
                objectApiName:'contact',
                actionName:'view'
            }
        })
    }

}