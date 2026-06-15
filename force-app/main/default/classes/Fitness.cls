public class Fitness {
    public Decimal bodyWeight;
    public Decimal bodyHeight;
    
    Public static Decimal calculateBMI(Decimal bodyWeight,Decimal bodyHeight){
       Decimal calcBMI = (bodyWeight/(bodyHeight*bodyHeight));
       return calcBMI;
    }
    Public static Decimal calculatePace(Decimal distance,Decimal minutes){
        Decimal hr = minutes/60;
        Decimal pace = distance /hr;
        return pace;
        
    }
    
        

}