import { LightningElement, wire} from 'lwc';
//import getEventAttendee from '@salesforce/apex/EventAttendee.getEventAttendee';

export default class EventAttendeeCamp extends LightningElement {

    selectedEventId;
    availableAttendees = [];
    selectedAttendees = [];
    error; 
    
    handleChangeEvent(event){

        this.selectedEventId = event.detail.recordId;
        console.log('id'+this.selectedEventId);

    }

    handleAttendeeChange(event){

        this.selectedAttendees = event.detail.value;

    }

}