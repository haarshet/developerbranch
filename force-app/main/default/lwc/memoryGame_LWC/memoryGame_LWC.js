import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'

export default class MemoryGame_LWC extends LightningElement {

    isLibLoaded = false;
    openedCards=[];
    moves=0;
    matchedCards=[];
    totalTime='00:00'
    timeRef;
    showCongratulations=false;
        cards= [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'},
      ]

      get gameRating(){
        console.log('inside game');
        let stars =  this.moves<12 ? [1,2,3]:this.moves>=13 ? [1,2]:[1]
        return this.matchedCards.length ===16 ? stars :[]
     
        }
      displayCard(event){
        let currCard = event.target;
        currCard.classList.add('open', 'show', 'disabled')
        this.openedCards = this.openedCards.concat(event.target)
        const len = this.openedCards.length
        if(len === 2){
            this.moves = this.moves+1;
            if(this.moves === 1){
                this.timer();
            }
            if(this.openedCards[0].type=== this.openedCards[1].type){
                this.matchedCards = this.matchedCards.concat(this.openedCards[0] ,this.openedCards[1] )
                this.matched()
            }else{
                this.unMatched()
            }
        }

      }


    matched(){
        this.openedCards[0].classList.add('match','disabled')
        this.openedCards[1].classList.add('match','disabled')
        this.openedCards[0].classList.remove('show','open')
        this.openedCards[1].classList.remove('show','open')
        this.openedCards=[]
        if(this.matchedCards.length === 16){
            window.clearInterval(this.timeRef)
            console.log('inside matched')
            this.showCongratulations=true
        }
    }

    unMatched(){
        this.openedCards[0].classList.add('unmatched')
        this.openedCards[1].classList.add('unmatched')
        this.action('DISABLE')
        setTimeout(()=>{
            this.openedCards[0].classList.remove("show", "open", "unmatched")
            this.openedCards[1].classList.remove("show", "open", "unmatched")
        this.action('ENABLE')
        this.openedCards=[]
        },1100)
    }

    action(action){
        let cards = this.template.querySelectorAll('.card')
        Array.from(cards).forEach(item=>{
            if(action === 'ENABLE'){
                let isMatch = item.classList.contains('match')
                if(!isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled')
            }

        })
    }

    timer(){
        let startTime = new Date()
        console.log('Datetime',startTime)
        this.timeRef = setInterval(()=>{
            let diff = new Date().getTime() - startTime.getTime()
            let d = Math.floor(diff/1000)
            const m = Math.floor(d % 3600 / 60);
            const s = Math.floor(d % 3600 % 60);
            const mDisplay = m>0 ? m+(m===1? "minute, ":" minutes, "):""
            const sDisplay = s>0 ? s+(s===1? "second":" seconds"):""
            this.totalTime = mDisplay + sDisplay
          }, 1000)
    }

    shuffle(){
        console.log('inside shuffle')
        this.showCongratulations=false
        this.openedCards=[];
        this.moves=0;
        this.matchedCards=[];
        this.totalTime='00:00'
     
        window.clearInterval(this.timeRef)
        let elem = this.template.querySelectorAll('.card')
        Array.from(elem).forEach(item=>{
            item.classList.remove('show','open','match','disabled')
        })

        let array = [...this.cards]
        let counter = array.lengththis.cards

        while(counter>0){
            let index = Math.floor(Math.random()*counter)
            counter--

            let temp = array[counter]
            array[counter]=array[index]
            array[index] = temp
        }

        this.cards =[...array]
    }












    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
            loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log('loaded succesfully')
            }).catch((error)=>{
                 console.error(error)
            })
            this.isLibLoaded=true
        }

    }

}