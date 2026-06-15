public class LWCAccountController {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts(String accountsText) {

        try{
            if(string.isEmpty(accountsText)){
                 system.debug('inside if');
                return [SELECT Id, Name FROM Account];
            }
            else{
                system.debug('inside else');
                accountsText='%'+accountsText+'%';
                return [SELECT Id, Name FROM Account WHERE Name LIKE :accountsText];
            }
        }catch(exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled 
    public static List<Contact> getContacts(String accountId){
        
        try{
			 return [SELECT Id , FirstName, LastName, Name FROM Contact WHERE accountId =:accountId];
        }catch(exception e){
            throw new AuraHandledException(e.getMessage());   
   	 	}

    }
}