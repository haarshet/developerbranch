public class PhoneCaseHandler extends CaseHandler {
     
    public override case createCase(){
        Case cs = new Case();
        cs.Origin = 'Phone';
        cs.Subject = 'This case is from the Phone';
        cs.Status = 'New';
        insert cs;
        return cs;
    }

}