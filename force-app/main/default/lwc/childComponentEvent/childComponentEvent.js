import { LightningElement } from 'lwc';
export default class ChildComponentEvent extends LightningElement {

    handleClick(){
        console.log('Inside child');
        this.dispatchEvent(new CustomEvent("previous",{bubbles :true}));
    }

}