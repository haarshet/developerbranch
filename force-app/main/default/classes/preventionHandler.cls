public class preventionHandler {
    
    public static void beforeInsert(List<Account> newAcc){
        preventionHndlrHelper.checkaccount(newAcc);
    }
    public static void beforeUpdate(List<Account> newAcc ,Map<Id,Account> oldMap){
        List<Account> accToCheck = new List<Account>();
        for(Account acc: newAcc){
            Account oldAcc = oldMap.get(acc.Id);
            if(acc.Name != oldAcc.Name){
                accToCheck.add(acc);
            }
            preventionHndlrHelper.checkaccount(accToCheck);
        }
    }
    
}