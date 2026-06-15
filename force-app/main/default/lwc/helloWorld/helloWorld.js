import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
  contacts = [
    { Id: 1, Name: 'Harish' },
    { Id: 2, Name: 'John' },
    { Id: 3, Name: 'David' },
    {Id:4, Name:'Sathish'}
];

}