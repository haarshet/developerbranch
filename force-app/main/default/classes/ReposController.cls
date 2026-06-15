public with sharing class ReposController {

    public static final string REPOS_KEY = 'https://api.github.com/repositories?since=1'; 
    public ReposController() {

    }
    @AuraEnabled(cacheable=true)
    public static string getRepos(){
        //1 Instantiate the http class

        HTTP http = new HTTP();

        //2 Instantiate the httprequest class

        httprequest req = new httprequest();
        req.setMethod('GET');
        req.setEndpoint(REPOS_KEY);

        HttpResponse res = http.send(req);

        if(res.getStatusCode() == 200){
            return res.getBody();
        }
        return 'Something went wrong';
        




    }
}