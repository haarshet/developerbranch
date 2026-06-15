public class preventionHndlrHelper{

    public static void checkaccount(List<Account>accList){
        set<string> names = new set<String>();
        for(Account acc: accList){
            if(acc.Name != null){
                names.add(acc.Name.toLowerCase());
                    }
        }
        Map<string,Account> accntMap = new Map<string,Account>();
        List<Account> accntList = [SELECT Id, Name FROM Account WHERE Name IN :names];
        
        for(Account acc:accntList){
            accntMap.put(acc.Name,acc);
        }
        for(Account acc : accList){
            if(accntMap.containsKey(acc.Name)){
                acc.addError('AccountName is already exist');
            }
        }
    }
    
  }