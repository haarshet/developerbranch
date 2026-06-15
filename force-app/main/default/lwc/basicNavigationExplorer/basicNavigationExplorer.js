import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class BasicNavigationExplorer extends NavigationMixin(LightningElement) {

    handleClick(){
        console.log('inside click');
        const pageRef = {
            type: "standard__objectPage",
            attributes:{
                objectApiName:"contact",
                actionName:"home"   
            }
        };

        this[NavigationMixin.Navigate](pageRef);
    }

}