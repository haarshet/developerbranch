import { LightningElement } from 'lwc';
import getAuthStatus from '@salesforce/apex/HubSpotAuthController.getCode';


export default class HubspotAuthIntiate extends LightningElement {

    connectedCallback(){
        
        const url = window.location.href;

        const code = new URL(url).searchParams.get('c__code');
        console.log('code'+code);

        getAuthStatus({code:code})
        .then((response) => {console.log(JSON.stringify(response))})
        .catch((error)=>{console.log(JSON.stringify(error))})

    }

    handleAuth(){

        window.location.href='https://app-na2.hubspot.com/oauth/authorize?client_id=de0d791d-30de-4c19-8b7e-6f851a2b7853&redirect_uri=https%3A%2F%2Fhh-salesfoorceportfolioo-dev-ed--c.develop.vf.force.com%2Fapex%2FHubSpotVFP&scope=oauth';
    }
}