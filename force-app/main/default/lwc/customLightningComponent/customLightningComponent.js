import { LightningElement } from 'lwc';

export default class CustomLightningComponent extends LightningElement {

    handleSlot(){
        const footElem = this.template.querySelector('footer')
        if(footElem){
            footElem.classList.remove('slds-hide');
        }
    }
}