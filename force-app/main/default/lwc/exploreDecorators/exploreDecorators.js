import { LightningElement ,track,api } from 'lwc';

export default class ExploreDecorators extends LightningElement {

@api greeting ='THE GOAT';

handleChange(event){
    this.greeting = event.target.value;
    console.log(this.greeting);
    }
}