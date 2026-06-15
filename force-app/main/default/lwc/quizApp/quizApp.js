import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={};
    correctAnswers = 0;
    isSubmitted=false;
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestion.length);
    }

    myQuestion=[

        {
            id:'Question.1',
            question:'Which one of the following is not a template loop?',
            answer:{
                a:'for:each',
                b:'Iterator',
                c:'Map loop'
            },
            CorrectAnswer:'c'
        },
        
        {
            id:'Question.2',
            question:'Which of the file is the invalid in the LWC Component?',
            answer:{
                a:'.svg',
                b:'.apex',
                c:'.js'
            },
            CorrectAnswer:'b'
        },
        
        {
            id:'Question.3',
            question:'Which one of the following is not a directive?',
            answer:{
                a:'for:each',
                b:'if:true',
                c:'@track'
            },
            CorrectAnswer:'c'
        }
    ]

    changeHandler(event){
        console.log('Name',event.target.name);
        console.log('Value',event.target.value);
        const {name,value} = event.target;
        this.selected={...this.selected,[name]:value};
}

get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswers ? 
        'slds-text-color_success' : 'slds-text-color_error'}`
}

resetHandler(){
    this.selected={};
    this.correctAnswer=0;
    this.isSubmitted = false;
}
submitHandler(event){
    event.preventDefault();
    let correct = this.myQuestion.filter(item=>
        this.selected[item.id] === item.CorrectAnswer);
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
        console.log('Correct Answer',this.correctAnswers);
}




}