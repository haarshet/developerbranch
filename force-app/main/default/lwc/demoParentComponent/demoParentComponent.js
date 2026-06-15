import { LightningElement } from 'lwc';

export default class DemoParentComponent extends LightningElement {

    name;
    childMsg;

    submitHandler(event){
    this.name=this.refs.userName.value;
    this.refs.childcomp.nameFromParent=this.name;
    console.log(this.name);

    }

    handleChildMsg(event){
        this.childMsg=event.detail;
        console.log(this.childMsg);
    }
    
}