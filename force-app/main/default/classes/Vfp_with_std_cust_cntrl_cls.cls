public class Vfp_with_std_cust_cntrl_cls {
    Public Account account;
    public Vfp_with_std_cust_cntrl_cls(Apexpages.StandardController contoller){
        account = (Account)contoller.getRecord(); 
        system.debug('---'+account.Name);
        system.debug('---'+account.Rating);
    }
    
    public void save(){
        
    }

}