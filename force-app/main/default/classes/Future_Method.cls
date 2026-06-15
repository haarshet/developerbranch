public class Future_Method {
    
    @future
    public static void exploreFutureannotation(){
        
        Opportunity opp = new Opportunity ();
        opp.Name = 'Test Future';
        opp.StageName = 'Prospect';
        opp.CloseDate = System.today();
        insert opp;
        
    }

}