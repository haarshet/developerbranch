public class AccountRelatedObjects {
    
    Public static void accntRelateditems ( String accountName){
        
        List<Account> accntList = [SELECT Id , Name, (SELECT Id , FirstName , LastName FROM Contacts),
                                   
                                   (SELECT Id ,Name FROM Opportunities), (SELECT Id, CaseNumber FROM Cases) 
                                   
                                   FROM Account WHERE Name= :AccountName];
        
        if(accntList.isEmpty()){
            System.debug('No account found with the name:' +accountName);
            return;
        }
        
        for(Account acc: accntList){
            system.debug('Account:'+acc.Name);
            
        
        
        for(Contact con: acc.Contacts){
            System.debug('contact.Name'+con.FirstName+''+con.LastName);
        }
     }
    }
}