@isTest
public class ContactTriggerHandlerTest {
    @Testsetup
    public static void makeData(){
        List<Account>testAccounts = new List <Account>();
        testAccounts.add(new Account(Name='Test1'));
        testAccounts.add(new Account(Name='Test2'));
        
        insert testAccounts;
        
        List <Contact> testContacts = new List <Contact>();
        testContacts.add(new Contact(LastName='Contact1', AccountId =testAccounts[0].Id ,Active__c = true ));
        testContacts.add(new Contact(LastName='Contact2', AccountId =testAccounts[0].Id ,Active__c = true));
        testContacts.add(new Contact(LastName='Contact3', AccountId = testAccounts[0].Id));
        testContacts.add(new Contact(LastName='Contact4', AccountId = testAccounts[1].Id));
        
        
        insert testContacts;
        
    }

    
    
    @isTest
    Public static void afterInsertHandlerTest2() {
 
        
        
        List <Account> accnt = [SELECT ID ,Name, Active_Contacts__c FROM Account];
        System.assertEquals (2 ,accnt.size());
        for( Account accs : accnt){
            if(accs.Name == 'Test1'){
                System.assertEquals (2 ,accs.Active_Contacts__c);
            }
            if(accs.Name == 'Test2'){
                System.assertEquals (0, accs.Active_Contacts__c);
            }
        } 

        
        List <Contact> cont = [SELECT ID FROM Contact];
        System.assertEquals (4 ,cont.size());
        
    }
    @isTest
    public static void afterInsertHandlerBulkTest2(){
        Account testAccount1 = [SELECT Id FROM Account WHERE Name ='Test1'];
        
        List<Contact> testContacts = new List<Contact>();
        for(Integer i=0; i>1000 ; i++){
            testcontacts.add(new contact(LastName = 'TestContact'+i , Active__c =True, AccountId = testAccount1.Id ));
        }

        
        insert testcontacts;
        
        List<Account> accnt= [SELECT Id ,Name, Active_Contacts__c FROM Account];
        System.assertEquals (2 , accnt.size() );
        
        for (Account acc : accnt){
            if (acc.Name == 'Test1'){
                System.assertEquals(2 ,acc.Active_Contacts__c );
            }
            if (acc.Name == 'Test2'){
                System.assertEquals(0 ,acc.Active_Contacts__c );
            }
        }
        
        List <Contact> cont = [SELECT ID FROM Contact];
        System.assertEquals (1004 ,cont.size());
        
        
    }
    
    @isTest
    Public static void afterUpdatetHandlerTest1() {

        
        List <Contact> cont = [SELECT Id, LastName, Active__c FROM Contact];
        System.assertEquals (4 ,cont.size());
        
        for(Contact con:cont){
            if(con.Lastname == 'Contact3'){
                con.Active__c = true ;
            }
        }
        
        Test.StartTest();
        update cont;
        Test.StopTest();
        List <Account> accnt = [SELECT Id ,Name, Active_Contacts__c  FROM Account WHERE Name = 'Test1'];
        for (Account acc : accnt){
            if (acc.Name == 'Test1'){
                System.assertEquals(3 ,acc.Active_Contacts__c );
            }
            if (acc.Name == 'Test2'){
                System.assertEquals(null ,acc.Active_Contacts__c );
            }
        }
        
        
    }
    @isTest
    Public static void afterUpdatetHandlerTest2() {

        Account testAccount2 = [SELECT Id FROM Account WHERE Name= 'Test2'];
        List <Contact> cont = [SELECT Id, LastName, Active__c FROM Contact];
        System.assertEquals (4 ,cont.size());
        
        for(Contact con:cont){
            if(con.Lastname == 'Contact1'){
                con.Active__c = true ;
                con.AccountId = testAccount2.Id;
            }
        }
        
        Test.StartTest();
        update cont;
        Test.StopTest();
        List <Account> accnt = [SELECT Id ,Name, Active_Contacts__c  FROM Account WHERE Name = 'Test1'];
        for (Account acc : accnt){
            if (acc.Name == 'Test1'){
                System.assertEquals(1 ,acc.Active_Contacts__c );
            }
            if (acc.Name == 'Test2'){
                System.assertEquals(1 ,acc.Active_Contacts__c );
            }
        }
        
        
    }
    
    @isTest
        Public static void afterDeleteHandlerTest() {

        List<Contact> allContacts  = [SELECT Id , LastName FROM Contact WHERE LastName = 'Contact2'];

        
        Test.StartTest();
        delete allContacts;
        Test.StopTest();
            
        List <Contact> cont1 = [SELECT Id, LastName, Active__c FROM Contact];
        System.assertEquals (3 ,cont1.size());
        List <Account> accnt = [SELECT Id ,Name, Active_Contacts__c  FROM Account];
        System.assertEquals (2,accnt.size());
        for (Account acc : accnt){
            if (acc.Name == 'Test1'){
                System.assertEquals(1 ,acc.Active_Contacts__c );
            }
            if (acc.Name == 'Test2'){
                System.assertEquals(0 ,acc.Active_Contacts__c );
            }
        }
    
    
    

        }
    
    
        @isTest
        Public static void afterUndeleteHandlerTest() {

        List<Contact> allContacts  = [SELECT Id , LastName FROM Contact WHERE LastName = 'Contact2'];

        
        Test.StartTest();
        delete allContacts;
        Test.StopTest();
            
        List <Contact> cont1 = [SELECT Id, LastName, Active__c FROM Contact];
        System.assertEquals (3 ,cont1.size());
        List <Account> accnt = [SELECT Id ,Name, Active_Contacts__c  FROM Account];
        System.assertEquals (2,accnt.size());
        for (Account acc : accnt){
            if (acc.Name == 'Test1'){
                System.assertEquals(1 ,acc.Active_Contacts__c );
            }
            if (acc.Name == 'Test2'){
                System.assertEquals(0 ,acc.Active_Contacts__c );
            }
        }
    
     }
    
    
    
}