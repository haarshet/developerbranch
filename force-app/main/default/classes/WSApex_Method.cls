global class WSApex_Method {
    /* When ever we are making webservice call out we should have global scope */
    
    Webservice static void exposemethodAsAOAPmethod(List<Account> a){
        system.debug('Account--'+a);
        
        
    }
    
    
}