public with sharing class ServiceNowAuthCntllr {

    public static string ENDPOINT ='https://dev295401.service-now.com/oauth_auth.do';
    public static string TOKEN_ENDPOINT ='https://dev295401.service-now.com/oauth_token.do';
    public static string REDIRECT_URI ='https://hh-salesfoorceportfolioo-dev-ed.develop.lightning.force.com/apex/ServiceNowAuthvfp';
    public static string CLIENT_ID ='92baaf916b5742a1bff6061a4e6482e2';
    public static string CLIENT_SECRET ='[y)Ot*?<**btP1[4+@^~U2zwa]sHXH5-';
    public static string CODE_VERIFIER ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    public ServiceNowAuthCntllr() {

    }

    @AuraEnabled
    public static string fetchURL(){

       
        //1. create code verifier
        //String codeVerifier = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        //2. Encrypt the code verifier
        Blob codeVerifierBlob = Blob.valueof(CODE_VERIFIER);
        Blob cryptoDigest = Crypto.generateDigest('SHA-256',codeVerifierBlob);
        //3.Encode the code verifier
        String codeChallenge = EncodingUtil.base64Encode(cryptoDigest);
        //.replace('+','-')
        //.replace('=','')
        //.replace('/','_')
        //.replace('','-');
        //.replace('','-');
        String authURL = ENDPOINT+
        '?grant_type=authorization_code'+
        '&redirect_uri='+REDIRECT_URI+
        '&client_id='+CLIENT_ID+
        '&response_type=code'+
        '&state='+'HEY'+
        '&code_challenge='+codeChallenge ;

        

        return authURL;
    }

    @AuraEnabled
    public static String exchangeCodeForAccesToken(String authCode){
       system.debug('authCode'+authCode);
        String body='';
        
        String requestBody = 'grant_type=authorization_code'+
        '&code='+
        EncodingUtil.urlEncode(authCode,'UTF-8')+
        '&client_id='+
        EncodingUtil.urlEncode(CLIENT_ID,'UTF-8')+
        '&client_secret='+
         EncodingUtil.urlEncode(CLIENT_SECRET,'UTF-8')+
       '&redirect_uri='+
        EncodingUtil.urlEncode(REDIRECT_URI,'UTF-8')+
        '&code_verifier='+
         EncodingUtil.urlEncode(CODE_VERIFIER,'UTF-8') ;

         Http http =new HTTP();
         HttpRequest req = new HttpRequest();
         req.setEndpoint(TOKEN_ENDPOINT);
         req.setMethod('POST');
         req.setHeader('Content-Type','application/x-www-form-urlencoded');
         req.setBody(requestBody);

         HttpResponse res = http.send(req);

         if(res.getStatusCode()==200){
             body= res.getBody();

         }else{
            System.debug(LoggingLevel.ERROR,
                'HTTP Error - Status: ' + res.getStatusCode() +
                ' Body: ' + res.getBody());
         }

         return body;

         


    }
}