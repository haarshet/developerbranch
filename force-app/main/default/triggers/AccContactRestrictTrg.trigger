trigger AccContactRestrictTrg on Contact (before insert,before update,after insert, after update,after undelete) {
    
    if(trigger.isBefore && (trigger.isUpdate|| trigger.isInsert )){
       // AccContactRestrictTrgHandler.contactHandler(trigger.new);
    }
    
    if(trigger.isAfter && (trigger.isUpdate|| trigger.isInsert || trigger.isUndelete)){
        //AccContactRestrictTrgHandler.contactHandler(trigger.new);
    }
}