public class Explore_queueabletwo implements Queueable {
    public void execute (QueueableContext context){
        Contact con = new Contact(LastName = 'Queue2');
        insert con;
    }

}