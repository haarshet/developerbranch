import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateToHome extends NavigationMixin(LightningElement)  {

    navigateToLWC(){
        var definition ={
            componentDef:'c:NavigateToTargetPage',
            attributes:{
                recordId:'9848309248840'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }

}