public abstract class CaseHandler {
    
    public abstract case createCase();
    public void assignCase(case passedCase){
        if(passedCase.Origin == 'Email'){
            System.debug('This case is created from Email');
        }else if(passedCase.Origin == 'Phone'){
            System.debug('This case is created from Phone');
        }
        
    }
    
        
    

}