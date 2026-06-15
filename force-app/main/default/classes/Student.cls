public class Student {
    private String greeting = 'Hello World';
    private String goodMorning = 'Hello World,GoodMorning';
    private String goodAfternoon = 'Hello World,Goodafternoon';
    private String goodNight = 'Hello World,GoodNight';

    // public variable
    //public String publicGreeting = 'My public greeting var';


    /*public void printGreeting() {
        System.debug(greeting);
    }
    public void printGoodmorning() {
        System.debug(goodMorning);
    }
    public void printGoodafternoon() {
        System.debug(goodAfternoon);
    }
    public void printGoodnight() {
        System.debug(goodNight);
    }

    // get an error about access modifiers
    /*global void printPublicGreeting() {
        System.debug(publicGreeting);
    }*/
    
    public void printMessage(string msg){
        system.debug(msg);
    }
    public string getDay(Integer dayNumber){
        string days = '';
        switch on daynumber{
            when 0{
                days = 'Monday';
            }
            when 1{
                days = 'Tuesday';
            }
            when else{
                days = 'Invalid day';
            }
      
        }
        return days;    
      
	}
    private string getDay(string dayabbreivation){
        string days = '';
        switch on dayabbreivation{
            when 'mon'{
                days = 'Monday';
            }
            when 'Tue'{
                days = 'Tuesday';
            }
            when else{
                days = 'Invalid day';
            }
      
        }
        return days;  
    
	}
}