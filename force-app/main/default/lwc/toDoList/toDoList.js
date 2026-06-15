import { LightningElement, track } from 'lwc';

export default class ExploreTodoList extends LightningElement {
    todo;
    @track todoarr=[];

    handleClick(){

        const todoObj = {
            id:'null',
            name:''
        }
        todoObj.id = Math.round(Math.random() *100);
        todoObj.name = this.todo;
        this.todoarr.unshift(todoObj);


    }

    handleChange(event){
        this.todo = event.target.value;
    }

   
}