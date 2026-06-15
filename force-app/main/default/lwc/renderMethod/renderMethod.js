import { LightningElement } from 'lwc';
import signinMethod from './signinMethod.html';
import signupMethod from './signupMethod.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {

    slectedTemplate='';

    render(){
        return this.selectedTemplate === 'signin' ? signinMethod:
        this.selectedTemplate === 'signup' ? signupMethod:
        renderMethod
    }

    handleClick(event){
        this.selectedTemplate=event.target.label;
        console.log(event.target.label);
    }
}