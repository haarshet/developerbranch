public class ExploreQueuableOne implements Queueable {
    public void execute (QueueableContext context){
        Account a = new Account(Name = 'Test queue Acc');
        system.debug('queuable one');
        insert a;
        
        system.enqueueJob(new Explore_queueabletwo());
        
    }

}