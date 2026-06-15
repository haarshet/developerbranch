public class Visualforce_supportcntllr {
    
    Public Integer count {set;get;}
    public  Visualforce_supportcntllr (){
        count=0;
    }
    
    public void counterhelper(){
        count++;
        system.debug('inside counterhelper'+count);
    }

}