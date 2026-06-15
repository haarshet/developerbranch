import { LightningElement } from 'lwc';
export default class Event_Child_component extends LightningElement {
    handleClick(event){
        //console.log('Goatttt chilg OG');
        //this.dispatchEvent(new CustomEvent('receiveddata' , {bubbles:true}))
        // Below steps are followed to call child HTML parent component
        //1. Get reference of the Element.
         this.template.querySelector('span').dispatchEvent('receiveddata' , {bubbles:true , composed: true});
        //2.Dispatch the event
    }
    handlerecivedfromchild(){
        console.log('salesforce expert');
    }

}