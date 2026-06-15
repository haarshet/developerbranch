import { LightningElement , api} from 'lwc';
export default class EmbedLWCinAura extends LightningElement {

    @api message;

    handleChange(event){
        this.message = event.target.value;

    }

    handleClick(){
        const sendMessage = this.message;
    
       const cEvent = new CustomEvent('senddata' , {detail: {sendMessage}});

       this.dispatchEvent(cEvent);
    }
}