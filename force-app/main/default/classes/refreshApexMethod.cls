public with sharing class refreshApexMethod {


    public refreshApexMethod() {
    
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAcccountList(){

        return [SELECT Id,Name,Industry FROM Account LIMIT 20];

    }
}