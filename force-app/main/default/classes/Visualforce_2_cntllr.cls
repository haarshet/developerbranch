public class Visualforce_2_cntllr {
    
    public String greeting{set;get;}
    public List<Account> account{set;get;}
    //public List<Account> accounts {set;get;}
    public List<List<Sobject>> data {set;get;}
    //public List<Contact> Contacts {set;get;}
    public List<Account> accounts { get; set; }
    public List<Contact> contacts { get; set; }
    
    public Visualforce_2_cntllr(){
        account=[SELECT Id , Name, Rating , (SELECT Id ,Name FROM Contacts),(SELECT Name From Opportunities) FROM Account];
        system.debug('inside the constructor');
            
    }
    
    
    public void methodOne(){
        data = [FIND 'Harish' IN ALL FIELDS RETURNING Account (Name , Phone) ,Contact (LastName)];
        accounts = (List<Account>) data[0];
        contacts = (List<Contact>) data[1];
        
        system.debug('from MethodOne'+greeting);
        system.debug('from MethodOne'+data); 
        
    }

}