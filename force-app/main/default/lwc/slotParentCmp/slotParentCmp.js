import { LightningElement,track } from 'lwc';

export default class SlotParentCmp extends LightningElement {

    @track announcement='Hi this is Alien';

    handleChange(event){
        this.announcement=event.target.value;
    }
}