import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
import PEOPLE_WALKING from '@salesforce/resourceUrl/people_walking';
export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE;
    peoplewalking = PEOPLE_WALKING;
}