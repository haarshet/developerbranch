public with sharing class ContactCreationController {
    @AuraEnabled(cacheable=true)
    public  static List<Id> getFilteredAccountIds(String leadSourceValue) {

        List<AggregateResult> accountAgg = [SELECT AccountId from Opportunity WHERE Account.AccountSource =: leadSourceValue and Account.Active__c ='Yes'
                                                GROUP BY AccountId HAVING Count(Id)>2];

        List<Id> filterIds = new List<Id>();
        for(AggregateResult ar : accountAgg){
            filterIds.add((Id)ar.get('AccountId'));
        }
        return filterIds;

    }
}