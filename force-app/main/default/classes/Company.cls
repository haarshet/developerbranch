public class Company {
    public string companyName;
    public string CEO;
    Public Integer employeeCount;
    public Long revenue;
    
    private List<Client> customers = new List<Client>();
    
    public void addNewCustomer(string clientName,string website,string email,Long phone){
        Client customer = new Client (clientName,website,email,phone);
        customers.add(customer);
    }
    public void getAllCustomer(){
        for(Client customer :customers){
             System.debug('clientName:'+customer.clientName+',Website:' +customer.website+',email:'+customer.email+',phone:'+customer.phone);
            //System.debug('Customer Name: '+customer.clientName+',Website:'+customer.website+', Phone: '+customer.phone+', Email: '+customer.email);
        }
        
    }
    
    private class Client{
        public string clientName;
        public string website;
        public string email;
        public Long phone;
        
        Client(string clientName,string website,string email,Long phone){
            this.clientName = clientName;
            this.website = website;
            this.email = email;
            this.phone = phone;
        }
        
    }
    

}