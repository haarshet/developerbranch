import { LightningElement } from 'lwc'
import {  NavigationMixin} from 'lightning/navigation';
import getAuthStatus from '@salesforce/apex/lwc_BoxAuth_cntrll.getAuthStatus';
import getFolders from '@salesforce/apex/lwc_BoxAuth_cntrll.getFolders';



export default class LwcBoxAuthintiator extends NavigationMixin (LightningElement) {

    authStatus = 'Not Authenticated';
    filesList;
    connectedCallback(){
        // 1. Grab URL from the address bar
        const url = window.location.href;
        //2. Extract the code from the URL
        const code = new URL(url).searchParams.get("c__code");
        //3. Make subsequent callout to get access token
        getAuthStatus({code:code})
        .then((response) => {
            console.log(response);
            this.authStatus = response;
        }) 
        .catch((error)=>{
            console.log(error);
            this.authStatus = error;
            
        })
      
       
    }

    handleAuthenticate(){
        
        // For rediecting to external platform with help of the URL
        console.log('inisde authenticate');
        window.location.href = 'https://account.box.com/api/oauth2/authorize/?client_id=x1rs54nuyh9uw9dqsm728xxmopn71mum&response_type=code';

       /*let pagerefrence ={

            type: 'standard__webPage',
            attributes:{
                url:'https://account.box.com/api/oauth2/authorize/?client_id=x1rs54nuyh9uw9dqsm728xxmopn71mum&response_type=code'
            }
        }
        this[NavigationMixin.Navigate](pagerefrence);*/
        
    }

    handleFetchFiles(){
        getFolders()
        .then((response) => {
            console.log(response);
            this.filesList = JSON.stringify(response);
        }) 
        .catch((error)=>{
            console.log(error);
            this.filesList = error;
            
        })
    }
}