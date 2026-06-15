/**
* @File Name : AdvanceDataTablecls.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : November 2, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | November 2, 2024 |   | Initial Version
**/

public class AdvanceDataTablecls {
	 @AuraEnabled(cacheable=true)
	Public static List<Contact> getContacts(){

		return [SELECT Id, Name, LeadSource, Phone, Account.Name, Account.Industry FROM Contact];
	}
	
		
}