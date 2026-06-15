import { LightningElement , wire} from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import GENERAL_INFO from "@salesforce/messageChannel/GeneralInfoMessageChannel__c";

export default class LwctoAura_publisher extends LightningElement {
@wire (MessageContext)
messageContext;

firstName;
lastName;
profession;

handleChange(event) {
    if(event.target.name === 'firstName'){
        this.firstName = event.target.value;
    }
    else if(event.target.name === 'lastName'){
        this.lastName = event.target.value;

    }
    else if(event.target.name === 'profession'){
        this.profession = event.target.value;
    }

}

    handleSubmit(){


        let data = {
            firstName: this.firstName,
            lastName: this.lastName,
            profession: this.profession
        };

        console.log(data);

        publish(this.messageContext, GENERAL_INFO, data);

    }


}