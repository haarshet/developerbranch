import { LightningElement } from 'lwc';
import Descrption_One from '@salesforce/label/c.Descr';
import Descrption_Two from '@salesforce/label/c.Descrption_Two';


export default class CustomLabelDemo extends LightningElement {

    LABELS={
        descriptionOne:Descrption_One,
        descriptionTwo:Descrption_Two
    }
}