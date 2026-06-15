public class CustomSearchController {
    
    public string q {set;get;}
    public  List<Account> account {set;get;}
   
    
    public void search(){
        
        account = Database.query('SELECT Id ,Name FROM Account WHERE Name LIKE \'%' + q + '%\'');
        
    }

}