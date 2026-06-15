import { LightningElement ,api} from 'lwc';

export default class ClockDropDown extends LightningElement {

    @api label='';
    @api options=[];
    @api uniqueId= '';

    handleChange(event){
        console.log(this.label);
        console.log(event.target.value);
        this.callParent(event.target.value);
    }

    callParent(value){
        this.dispatchEvent(new CustomEvent('optionhandler',{
            detail:{
                label:this.label,
                value:value
            
            }
        }))
    }

    @api 
    reset(value){
        this.template.querySelector('select').value = value;
        console.log('resetvalue',value);
        this.callParent(value);

    }
}