public with sharing class HubSpotAuthController {
    public HubSpotAuthController() {

    }
    @AuraEnabled
    public static string getCode(String code){
       // 1. Instatiate HTTP Class

       HTTP http = new HTTP();

       //2. Instatiate the httprequest

       HttpRequest req = new HttpRequest();
       req.setEndpoint('https://api.hubapi.com/oauth/v3/token');
       req.setMethod('POST');
       req.setHeader('Content-Type','application/x-www-form-urlencoded');
       
       String reqBody = 'grant_type=authorization_code&code=' +code +
       '&redirect_urihttps://app-na2.hubspot.com/oauth/authorize?client_id=de0d791d-30de-4c19-8b7e-6f851a2b7853&redirect_uri=https%3A%2F%2Fhh-salesfoorceportfolioo-dev-ed--c.develop.vf.force.com%2Fapex%2FHubSpotVFP&scope=oauth' +
      '&client_id=de0d791d-30de-4c19-8b7e-6f851a2b7853&client_secret=6aaca0af-7c86-443b-adfe-132f16987f3f';
        
      req.setBody(reqBody);

      //3. Http response

      HttpResponse res = http.send(req);


      if(res.getStatusCode() == 200){
        Map<String,Object>responseMap= (Map<String,Object>)JSON.deserializeUntyped(res.getBody());
            String accessToken = (String)responseMap.get('access_token');
            String companyInfo = syncAccount(accessToken);
            return companyInfo;
      }else{
        return 'Something went wrong ,Authentication failed';
      }
    }

    @AuraEnabled
    public static string syncAccount(String accessToken){
        
        Http http = new HTTP();

        HTTPRequest req = new HTTPRequest();
        req.setEndpoint('https://api.hubapi.com/account-info/v3/details');
        req.setMethod('GET');
        req.setHeader('Content-Type','application/json');
        req.setHeader('Authorization','Bearer '+accessToken);

        HttpResponse res = http.send(req);
        if(res.getStatusCode() == 200){
            return res.getBody();
        }else{
            return 'Something went wrong';
        }
       
    }
}