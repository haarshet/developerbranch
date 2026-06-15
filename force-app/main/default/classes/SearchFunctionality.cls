public with sharing class SearchFunctionality {

    @AuraEnabled (Cacheable =true)
    public static List<Account> fetchAccRecord(String SearchKey) {

        String searchTerm = '%'+SearchKey+'%';
         return [SELECT Id, Name
                 FROM Account
                 WHERE Name LIKE : searchTerm ];

        


    }
}