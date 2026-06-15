import { LightningElement } from 'lwc';

export default class BMIPrjt extends LightningElement {


    height='';
    weight='';
    bmiValue;
    result;
    
    inputHandler(event){

        const{name, value} = event.target;

        if(name === "Height"){
            this.height = value;
            //console.log('height',this.height);
        }
        if(name === "Weight"){
            this.weight = value;
            //console.log('weight',this.weight);
        }

    }


    handleSubmit(event){
        event.preventDefault();
        console.log('height',this.height);
        console.log('weight', this.weight);
        this.calculate();

    }
    
    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmiValue = Number(bmi.toFixed(2));

        if(this.bmiValue < 18.5) {

            this.result = 'You are underweight and possibly malnourished.';
        }else if(this.bmiValue >= 18.5 && this.bmiValue < 25) {

            this.result = 'You are healthy.';
        }else if(this.bmiValue >= 25 && this.bmiValue < 30) {

            this.result = 'You are overweight.';
        }else if(this.bmiValue >= 30) {

            this.result = 'You are Obesse';
        }
        console.log('BMI VALUE IS',bmi);
        console.log('result is', this.result);

    }

    recalculate(){
        this.height='';
        this.weight='';
        this.bmiValue='';
        this.result='';;

    }

}