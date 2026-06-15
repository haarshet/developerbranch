public class LeadTriggerHandler {
    
    public static void beforeInsertHandler(List<Lead> newRecords){
        for(Lead leadRecord : newRecords){
            if(String.isBlank(leadRecord.LeadSource)){
                leadRecord.LeadSource = 'Other';
            }
            // validation rules on Industry fields
            if(String.isBlank(leadRecord.Industry)){
                leadRecord.addError('The industry field cannot be blank');
            }
        }
        
    }
    
    public static void afterInsertHandler(List<Lead> newRecords){
        for(Lead leadRecord : newRecords){
            // create a task
            Task leadTask = new Task(Subject='Follow up on Lead Status', WhoId=leadRecord.Id);
            insert leadTask;
        }
        
    }
    
    public static void beforeUpdateHandler(List<Lead> newRecords , Map<Id, Lead> oldRecordMap){
        for(Lead leadRecord : newRecords){
            if(String.isBlank(leadRecord.LeadSource)){
                leadRecord.LeadSource = 'Other';
            }
            if((leadRecord.Status == 'Closed - Converted' || leadRecord.Status == 'Closed - Not Converted') && oldRecordMap.get(leadRecord.Id).Status == 'Open - Not Contacted'){
                leadRecord.Status.addError('You cannot directly close an open lead record');
            }
        }
        
        
    }
    
}