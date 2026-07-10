import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import{encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';

export default class NavigateToHome extends NavigationMixin(LightningElement)  {

    navigateToObjectPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

        navigateToNewRecordWithDefaultValues(){
            
            const defaultFields= encodeDefaultFieldValues({
                FirstName:'Lucky',
                LastName:'Duck',
                LeadSource:'Other'
            })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultFields
            }
        })
    }

}