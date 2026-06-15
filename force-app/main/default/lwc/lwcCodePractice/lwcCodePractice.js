import { LightningElement } from 'lwc';

export default class LwcCodePractice extends LightningElement {

    isVisible = false;

    handleClick(){
        this.isVisible = true;
    }

    carList=['BMW','AUDI','FORD','TOYOTA','KIA'];

    carCompany=[
        {
            id:1,
            name:'Harish',
            car:'Harrier'
        },
        {
            id:2,
            name:'Hema',
            car:'BMW'
        },
        {
            id:3,
            name:'Penny',
            car:'Benz'
        }


    ]
}