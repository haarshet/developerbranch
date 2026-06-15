public with sharing class serverSortingController {

    @AuraEnabled (cacheable = true)
    public static List<Opportunity> fetchSortedData( String sortedBy , String sortDirection) {

        String query = ' SELECT Id , Name , Amount FROM Opportunity WHERE Amount!= null';

        if(sortedBy != null && sortDirection !=null){

            query += ' ORDER BY ' + sortedBy +' ' + sortDirection;
        }

        return Database.query(query);

    }
}