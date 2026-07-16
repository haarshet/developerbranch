import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateToHome extends NavigationMixin(LightningElement)  {

    navigateToRelaatedTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'001J400000htHFbIAM',
                ObjectApiName:'Account',
                relationshipApiName:'contacts',
                actionName:'view'
                
            }
        })
    }


}