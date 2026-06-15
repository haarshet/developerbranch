import { LightningElement,api } from 'lwc';

export default class DemoChildComponent extends LightningElement {

    @api nameFromParent;

    handleClick(){
         const msg="Harish";
         const trigger=new CustomEvent('showmessage',{detail:msg});
         this.dispatchEvent(trigger);

    }
    
}