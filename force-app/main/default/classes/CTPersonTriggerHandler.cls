public with sharing class CTPersonTriggerHandler {
    
    public static void beforeInsert(List<Person__c> newRecords){
        // Before insert operation for Person__c object
        // make sure the health status is green
        // generate unique token for each record
        for(Person__c person: newRecords){
             // update person status to Green
            person.Health_Status__c = 'Green';
             // generate unique token
            person.Token__c = CTPersonController.getToken(person.Mobile__c);
        }
    }
    
    // Before update operation for Person__c object
    public static void beforeUpdate(List<Person__c> newRecords, Map<Id, Person__c> oldRecordsMap){
        for(Person__c person : newRecords){
            // check if the status changed in this transaction
            // also update Status_Update_Date__c
            if( person.Health_Status__c != oldRecordsMap.get(person.id).Health_Status__c){
                person.Status_Update_Date__c = Date.today();
            }
        }
    }
    
    public static Set<Id> getcohabitants (Set<Id>personIds){
        List<String> healthstatus = new List<String>{'Green','Yellow'};
        List<People_Tracing__c> peopleTraces = [SELECT Id, person_1__c, Person_2__c FROM People_Tracing__c
                                               WHERE (person_1__c IN :personIds OR person_2__c IN :personIds)
                                               AND Contact_Type__c = 'Cohabitant' 
                                               AND (person_1__r.Health_Status__c IN :healthstatus OR person_2__r.Health_Status__c IN :healthstatus)];
 set<Id> cohabitants = new Set <Id>();
        for(People_Tracing__c pt :peopleTraces){
            if(!personIds.contains(pt.person_1__c)){
                cohabitants.add(pt.person_1__c);
            }
            if(!personIds.contains(pt.person_2__c)){
               cohabitants.add(pt.person_2__c);
            }
            
        }
        return cohabitants;
        
        
        
        
    }
}