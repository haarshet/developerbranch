trigger ContactTrigger on Contact (after insert, after update, after delete, after undelete) {
    switch on Trigger.operationType{
        When AFTER_INSERT{
            ContactTriggerHandler.afterInsertHandler(Trigger.new);
            
        }
        
        WHEN AFTER_UPDATE{
            ContactTriggerHandler.afterUpdateHandler(Trigger.new , Trigger.oldMap);
            
        }
        
        WHEN AFTER_DELETE{
            ContactTriggerHandler.afterDeleteHandler(Trigger.old );
            
        }
        
        WHEN AFTER_UNDELETE{
            ContactTriggerHandler.afterUndeleteHandler(Trigger.new);
            
        }
        
        
    } 
}