@isTest
public class Fitness_Test {
    @isTest
    
    Public static void calculateBMITest(){
		Decimal weight = 60;
        Decimal height = 1.2;
		
        Decimal result = Fitness.calculateBMI(weight, height);
        result= result.setscale(2);
        System.assertEquals(41.67, result, 'BMI should be 41.67 for 60kg weight and 1.2 mtr height');
    }
    @isTest
    Public static void calculatePaceTest(){
        Decimal distance = 10;
        Decimal minutes = 60;
        Decimal result = Fitness.calculatePace(distance, minutes); 
        System.assertEquals(10, result, 'Pace should 10km/hr for 10 km in 60 minutes');
        
    }


}