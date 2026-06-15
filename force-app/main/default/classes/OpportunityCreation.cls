public class OpportunityCreation {
public string Name;
    public string StageName;
    public Date  CloseDate;
    public void createOpportunity(){
        Opportunity opp = new opportunity();
        opp.Name =Name;
        opp.StageName = StageName;
        opp.CloseDate = CloseDate;
        insert opp;
        system.debug('new opportunity'+opp);
    }
    
    public static void startEngine(){
        system.debug('Start Engine');
    }
}