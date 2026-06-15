public with sharing class ClientSortingElm {
    @AuraEnabled (Cacheable=true)
    public static List<Opportunity> fetchData() {
        List<Opportunity> oppList = [SELECT Id, Name, Amount FROM Opportunity WHERE Amount!= null];

        return oppList;
    }
}