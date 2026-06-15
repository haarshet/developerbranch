public with sharing class RecordPickerController {
    @AuraEnabled (cacheable=true)
    public static List<Contact> fetchContactData( Id accId) {

        List<Contact> conList = new List<Contact>();
        if(accId !=null){
        conList = [SELECT Id, FirstName, LastName, Phone FROM Contact WHERE AccountId =:accId];
        }
        return conList;

    }
}