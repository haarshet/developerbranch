import { LightningElement } from 'lwc';
import AlarmClock from '@salesforce/resourceUrl/AlarmClock';
import ClockSound from '@salesforce/resourceUrl/clockSound';

export default class AlarmClockApp extends LightningElement {

    clockImage= AlarmClock;
    ringTone = new Audio(ClockSound);
    currentTime;
    hours=[];
    minutes=[];
    meridiems = ["AM","PM"];
    alarmTime;
    isAlarmSet = false;
    alarmIsTriggered=false;
    hourSelected;
    minSelected;
    meridiemSelected;

    get isFieldNotSelected(){
        return !(this.hourSelected && this.minSelected && this.meridiemSelected)
      }
    
    get shakeImage(){
      return this.alarmIsTriggered ? 'shake' : ''
    }

    connectedCallback(){
        this.currentTimeHandler();
        this.createHourOptions();
        this.createMinutesOptions();
    }

    currentTimeHandler(){

        setInterval (()=>{
            let date = new Date();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let ampm = "AM";
            if(hour == 0){
                hour = 12;
            }else if(hour === 12){
                ampm = "PM";
            }
            else if(hour>=12){
                hour = hour-12; 
                ampm="PM";
            }
            hour = hour<10 ? "0"+hour : hour;
            min = min<10 ? "0"+min : min;
            sec= sec<10 ? "0"+sec : sec;

            this.currentTime = `${hour}:${min}:${sec} ${ampm}`

            if(this.alarmTime === `${hour}:${min} ${ampm}`){
              console.log("Alarm Triggered!!")
              this.alarmIsTriggered = true;
              this.ringTone.play();
              this.ringTone.loop = true;
            }
        
        },1000);



        
    }

    createHourOptions(){
        for (let i=1; i<=12;i++){
            let val = i<10 ? '0'+i :i
            this.hours.push(val);
        }
    }

    createMinutesOptions(){
        for (let i=0; i<=59;i++){
            let val = i<10 ? '0'+i :i
            this.minutes.push(val);
        }
    }

    optionHandler(event){
        const {label, value} = event.detail
        if(label === "Hour(s)"){
          this.hourSelected = value
        } else if(label === "Minute(s)"){
          this.minSelected = value
        } else if(label === "AM/PM"){
          this.meridiemSelected = value
        } else {}
    
        //console.log(" this.hourSelected",  this.hourSelected)
        //console.log(" this.minSelected",  this.minSelected)
        //console.log(" this.meridiemSelected",  this.meridiemSelected)
      }

      setAlarmHandler(){
        this.alarmTime = `${this.hourSelected}:${this.minSelected} ${this.meridiemSelected}`
        console.log("Alarm Time", this.alarmTime);
        this.isAlarmSet = true
      }

      clearAlarmHandler(){
        this.isAlarmSet = false;
        this.alarmTime = '';
        this.alarmIsTriggered =false;
        this.ringTone.pause();
        const elements = this.template.querySelectorAll('c-clock-drop-down')
        Array.from(elements).forEach(element=>{
            element.reset('')  
        })
      }
    
    }