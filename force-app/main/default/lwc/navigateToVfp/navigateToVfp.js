import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class NavigateToHome extends NavigationMixin(LightningElement)  {

    navigateToVfp(){

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:"/apex/navigateToVfp"
            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl,'_blank')
        })
    }

}