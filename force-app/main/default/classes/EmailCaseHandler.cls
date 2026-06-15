public class EmailCaseHandler extends CaseHandler{
    
    public override case createCase(){
        Case cs = new Case();
        cs.Origin = 'Email';
        cs.Subject = 'This case is from the Email';
        cs.Status = 'New';
        insert cs;
        return cs;
    }

}