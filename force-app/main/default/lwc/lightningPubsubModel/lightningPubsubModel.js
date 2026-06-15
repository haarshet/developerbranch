import { LightningElement ,wire } from 'lwc';
import { fireEvent } from 'c/pubSubLibrary';
import { CurrentPageReference } from 'lightning/navigation';


export default class LightningPubsubModel extends LightningElement {
    message = 'HEY I am from publisher component';

    @wire(CurrentPageReference) currentPageReference ;

    handleClick(){
        fireEvent(this.currentPageReference ,"Send Data",this.message);
    }
}