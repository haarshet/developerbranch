global class UpdateBatchClass
implements Database.Batchable<SObject> {

    global Database.QueryLocator start(Database.BatchableContext bc){

        return Database.getQueryLocator(
            'SELECT Id, Industry,Rating FROM Account WHERE Rating= \'Hot\''
        );
    }

    global void execute(Database.BatchableContext bc, List<Account> scope){

        for(Account acc : scope){
            acc.Industry = 'Retail';
        }

        update scope;
    }

    global void finish(Database.BatchableContext bc){
        System.debug('Batch completed');						
         //system.enqueueJob( new ExploreQueuableOne());
         FutureClassDemo1.futureMrthod2();
    }
}