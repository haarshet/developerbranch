import { LightningElement } from 'lwc';
export default class ParentComponentEvent extends LightningElement {
 handleonParent(){
    Console.log('The Leo leo leo');
 }
 renderedCallback(){
    console.log('Inside render parent');
    this.template.addEventListener('previous',this.handleonParent.bind(this));
 }
}