public class Schema_Example_1 {
    public Map<String,Object> objResult {set; get;}
    public String name {set;get;}
    public Schema_Example_1 (){
        Schema.DescribeSobjectResult result = Account.SobjectType.getDescribe();
        objResult = new Map <String,Object>();
        objResult.put('Label',result.getLabel());
        objResult.put('Pural',result.getLabelPlural());
        objResult.put('Read',result.isAccessible());
        
        
        
        
    }
    
    public void save(){
         
        Schema_Example_helper_1 helper = new Schema_Example_helper_1();
        helper.login();
        helper.logout();
        
            
    }

}