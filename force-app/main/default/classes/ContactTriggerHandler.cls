public class ContactTriggerHandler {
    
    public static void afterInsertHandler(List<contact> newContacts){
        Set<Id> accIds = new Set <Id>();
        for (Contact con: newContacts){
            if(String.isNotblank(con.AccountId) ){
                //write automation logic here
                accIds.add(con.AccountId);
            }
            
        }
        AccountContactService.updateActiveContacts(accIds);
            
       
    }
    
    public static void afterUpdateHandler(List<contact> newContacts , Map<Id,Contact> oldContactsMap){
        Set<Id> accIds = new Set <Id>();
        for (Contact con: newContacts){
            if(String.isNotblank(con.AccountId) && oldContactsMap.get(con.Id).Active__c != con.Active__c){
                //write automation logic here
                accIds.add(con.AccountId);
            }else if(oldContactsMap.get(con.Id).AccountId != con.AccountId){
                accIds.add(con.AccountId);
                accIds.add(oldContactsMap.get(con.Id).AccountId);
            }
            
        }
        AccountContactService.updateActiveContacts(accIds);
    }
    
    public static void afterDeleteHandler (List<Contact> oldContacts){
        Set<Id> accIds = new Set <Id>();
        for (Contact con: oldContacts){
            if(String.isNotblank(con.AccountId) ){
                //write automation logic here
                accIds.add(con.AccountId);
            }
            
        }
        AccountContactService.updateActiveContacts(accIds);

        
    }
    
    public static void afterUndeleteHandler (List<Contact> newContacts){
        Set<Id> accIds = new Set <Id>();
        for (Contact con: newContacts){
            if(String.isNotblank(con.AccountId) ){
                //write automation logic here
                accIds.add(con.AccountId);
            }
            
        }
        AccountContactService.updateActiveContacts(accIds);
        

        
        
    }

    
    
    
}