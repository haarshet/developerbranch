trigger CloneOpportuity on Account (after insert) {
    List<Opportunity> oppToBeUpdated = new List<Opportunity>();
    for(Account acc: trigger.new){
        if(acc.clone__c == true){
            Opportunity opp= new Opportunity();
            opp.Name = 'Edge Communication';
            opp.stageName = 'Prospecting';
            opp.CloseDate = System.today();
            oppToBeUpdated.add(opp);   
            
            
        }
        insert oppToBeUpdated;
        
    }

}