import { LightningElement, track } from 'lwc';

export default class SlotChildComp extends LightningElement {

    @track upperText;
    handleSlotChange(event){
        const assignedNodes = event.target.assignedNodes();
        const textContent = assignedNodes.map(node => node.textContent).join('');
        this.upperText = textContent.toUpperCase();
        console.log('Inside slot change');
    }

}