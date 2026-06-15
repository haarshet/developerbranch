trigger Accounttrigger on Account (before insert ,before update) {
  if(trigger.isBefore && trigger.isInsert ){
   preventionHandler.beforeInsert(trigger.new);
}

if(trigger.isBefore && trigger.isUpdate ){
   preventionHandler.beforeUpdate(trigger.new, trigger.oldMap);
}

}