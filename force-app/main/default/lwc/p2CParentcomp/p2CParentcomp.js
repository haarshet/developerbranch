import { LightningElement } from 'lwc';

export default class P2CParentcomp extends LightningElement {

    handleClick(){
        this.template.querySelector('c-p2-c-slider-comp').resetSlider();
    }
}