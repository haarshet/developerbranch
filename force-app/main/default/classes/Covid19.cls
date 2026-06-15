public class Covid19 {
    Public Integer recoveredInArea = 0;
    Public Static Integer recoveredIncountry = 0;
    
    public Covid19(){
        system.debug('Empty Constructor');
    }
    
    public Covid19(Integer recoveredInArea){

        this.recoveredInArea = recoveredInArea;
        recoveredIncountry = recoveredInArea;
        System.debug('default constructor');
    }
    
    Public void treatment(){
        recoveredInArea++;
        recoveredInCountry++;
    }

}