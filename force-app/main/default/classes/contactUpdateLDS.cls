public with sharing class contactUpdateLDS {
    
    //To return the contact to LDSUpdateRecord (lwc)

    @AuraEnabled (cacheable=true)
    public Static Contact getContactUpdateLDS() {
        return [SELECT ID ,FirstName,LastName From Contact LIMIT 1];
       
    }
}