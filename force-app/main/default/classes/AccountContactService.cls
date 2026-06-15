public class AccountContactService {
    
    public static void updateActiveContacts(Set<Id> accIds){
        List <AggregateResult> results = [SELECT AccountId, COUNT(Id) totalContacts FROM Contact 
                                          WHERE Active__c = TRUE AND AccountId IN :accIds GROUP BY AccountId];
        
        Map<Id ,Account>accountsToUpdate = new Map<Id ,Account>();
        for (AggregateResult result : results){
            // get account id and number of active contacts
            String accntId = String.valueOf(result.get('AccountId'));
            Integer totalContacts = Integer.valueOf(result.get('totalContacts'));
            
            Account acc = new Account(Id=accntId ,Active_Contacts__c =totalContacts );
            accountsToUpdate.put(accntId ,acc);
        }
        
        for (Id accntId :accIds ){
            if(!accountsToUpdate.containskey(accntId)){
                accountsToUpdate.put(accntId , new Account(Id=accntId ,Active_Contacts__c =0 ) );
            }
            
        }
        update accountsToUpdate.values();
        
    }
    
}