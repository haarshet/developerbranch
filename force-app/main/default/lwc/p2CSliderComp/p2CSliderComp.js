import { LightningElement,api} from 'lwc';

export default class P2CSliderComp extends LightningElement {

    val=20
    
    handleChange(event){
        this.val = event.target.value;
    }

    @api resetSlider(){
        this.val=50;
    }

}