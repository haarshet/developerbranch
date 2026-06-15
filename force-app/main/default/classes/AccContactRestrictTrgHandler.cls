public class AccContactRestrictTrgHandler {

    public static void contactHandler (List<Contact> contactList){
        
        Set<Id> accId = new Set<Id>();
        for (Contact con: contactList){
            accId.add(con.AccountId);
        }
        Map<Id, Integer> cntCount = new Map<Id, Integer>();
        if (!accId.isEmpty()){
            for (AggregateResult ar : [SELECT COUNT(Id) contactCount, AccountId FROM Contact WHERE AccountId IN :accId GROUP BY AccountId]){
                cntCount.put((Id)ar.get('AccountId'), (Integer)ar.get('contactCount'));
            }
        }
        
        for (Contact con:contactList){
            
            Integer existingCount = cntCount.get(con.AccountId);
            if(existingCount > 5){
                con.adderror('You can not associate more than 5 contacts with selected Account');
            }
        }
    }
}