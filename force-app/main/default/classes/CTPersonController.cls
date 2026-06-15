public with sharing class CTPersonController {
    public static string getToken(string mobileNo){
        Blob value = Blob.valueOf(mobileNo);
        Blob hash = Crypto.generateDigest('MD5', value);

        //to get the string value of hash blob 

        return EncodingUtil.base64Encode(hash);
    }
    
    /** 
     * get 100 contact of recent health changes people
     * @return List<Person__c>
     */
    Public static List<Person__c> getRecentHealthChange(){
        return [SELECT Id, Name, Health_Status__c, Mobile__c, Token__c, Status_Update_Date__c FROM Person__c ORDER BY Status_Update_Date__c DESC NULLS LAST LIMIT 100];
    }
    
        /** 
     * To search the people by name ,phone no,Token no 
     * @return List<Person__c>
     */
    
    Public static List<Person__c> searchPeople (string searchTerm){
        searchTerm = searchTerm + '%';
        return [SELECT Id, Name, Health_Status__c, Mobile__c, Token__c, Status_Update_Date__c 
            FROM Person__c 
            WHERE Name LIKE :searchTerm 
               OR Mobile__c LIKE :searchTerm 
               OR Token__c LIKE :searchTerm 
            ORDER BY Status_Update_Date__c DESC NULLS LAST];
    }
    
    	/** 	
        * To search the people by Id
        * @return List<Person__c>
        */
    Public static Person__c getPersonID (String personId){
        List<Person__c> people = [SELECT Id, Name, Health_Status__c, Mobile__c, Token__c, Status_Update_Date__c 
            FROM Person__c 
            WHERE Id =:personId];
        if (people != null && people.size()>0){
            return people[0];
        }
        return null;
        
             
    }
    
    public static Map<String ,Integer> getHealthStatusCount(){
        Map<String ,Integer> healthCountMap = new Map <String ,Integer>();
        for(AggregateResult ar :[SELECT Health_Status__c , COUNT (Id) total
                                 FROM Person__c 
                                 GROUP BY Health_Status__c]){
                                     
        String healthStatus = String.valueof(ar.get('Health_Status__c'));
        Integer totalCount =  Integer.valueof(ar.get('total'));                       
        healthCountMap.put(healthStatus,totalCount);   
        }
        return healthCountMap;
    }
    
    
    
    

}