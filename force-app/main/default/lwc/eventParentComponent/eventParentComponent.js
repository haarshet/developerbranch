import { LightningElement ,track} from 'lwc';
export default class Event_parent_Component extends LightningElement {
    @track message;

    handlerecivedfromparent(){
        console.log('I am from Parent');
    }

    //handledata(event){
        //this.message = event.detail;
        //console.log('GOATTTT parent');

    //}

}