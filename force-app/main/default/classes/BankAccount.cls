public class BankAccount {
    public String accountNumber;
    public Decimal balance;
    public String accountType;
    public Decimal amount;
    public BankAccount(){
        this.balance = 0;
        this.accountType ='Saving';
        
    }
    
   public BankAccount(String accountNumber,Decimal balance){
        this.balance = balance;
        this.accountNumber =accountNumber;
        system.debug('Two parameter constructor');
        
    }
    
       public BankAccount(String accountNumber,Decimal balance,String accountType){
            this.balance = balance;
        	this.accountNumber =accountNumber;
            this.accountType = 'Saving';
        	system.debug('Three parameter constructor');
        
    }
    
    public void deposit(Decimal amount){
        if(amount>0){
            this.balance+=amount;
        	system.debug('balance'+balance);
        }
        else{
          system.debug('Invalid deposit Amount');
        }

    }
    
    public String getAccountInfo(){
        
        return('Account Number:'+this.accountNumber+', '+'Balnace;'+this.balance+','+'AccountType:'+this.accountType);
    }
    
     

}