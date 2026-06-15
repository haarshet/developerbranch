public class Calculator {
    
    public static Integer addNumbers (Integer a,Integer b){
        Integer add = a+b;
        return add;
    }
    
    private boolean isEven(Integer num){
       boolean isEven;
        Integer rem = Math.mod(num,2);
        if(rem == 0){
            System.debug('The Number is Even');
            isEven = true;
        }
        else{
            isEven = false;
        }
        return isEven;
        
    }
    
    public List<Integer> getEvenNumbers(List<Integer> numbers){
        List<Integer>evenNumber = new List<Integer>();
        for(Integer num:numbers){
            if(num>=0){
                if(isEven(num)){
                    evenNumber.add(num);
                }
                
            }else{
                System.debug('Negative Number');
            }
           
        }
        return evenNumber;
        
    }
    
    
    public void printResult(List<Integer> result){
        system.debug('The Even Numbers are:'+result);
    }
    
    

}