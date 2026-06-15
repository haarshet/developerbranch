// To learn the PKCE Flow controller with box API.


public class BoxAuthwithPKCEFlowcontroller {
    public PageReference authenticate(){
        
         String endPoint = 'https://account.box.com/api/oauth2/authorize/?client_id=a59c3jad663n1kv05xqlq3b2hnuddx3l&response_type=code&code_challenge_method=S256&code_challenge=';
        // STEP1:Create code verifier
        String codeVerifier = 'A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6';
        // STEP2: Encrypt the code verifier
        Blob codeVerifierBlob = Blob.valueof(codeVerifier);
        Blob cryptoDigest = Crypto.generatedigest('SHA3-256',codeVerifierBlob);
        
        //STEP3: Encode the code verfier
        
        String afterCryptoDigest = Encodingutil.base64Encode(cryptoDigest);
        
        endpoint = endpoint + afterCryptoDigest;
        
        return new PageReference (endpoint);
       
        
    }
    
    public void accessToken(){
        String authcode = apexpages.currentpage().getparameters().get('code');
        String clientId = 'a59c3jad663n1kv05xqlq3b2hnuddx3l';
        String clientSecret ='8duzj5PZetuOOCUpwbYJWkcA93YCDiKm';
        String codeVerifier = 'A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6';
        String redirectUri = 'https://tataconsultancyservice-3b-dev-ed--c.vf.force.com/apex/BoxauthwithPKCEFlowSuccess';
        
        HTTP http = new HTTP();
        
        HttpRequest req = new HttpRequest();
        req.SetEndpoint('https://api.box.com/oauth2/token');
        req.setMethod('POST');
        
        String body = 'grant_type=authorization_code'+'&code='+EncodingUtil.urlEncode(authcode, 'UTF-8')+
            			'&client_id='+EncodingUtil.urlEncode(clientId, 'UTF-8')+
            			 '&client_secret='+EncodingUtil.urlEncode(clientSecret, 'UTF-8')+
            			 '&redirect_uri='+EncodingUtil.urlEncode(redirectUri, 'UTF-8')+
            			 '&code_verifier='+EncodingUtil.urlEncode(codeVerifier, 'UTF-8');
        
        req.setBody(body);
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        HttpResponse res = http.send(req);
        
        
        if(res.getStatusCode()==200){
            System.debug('Sucess'+res.getbody());
            Map<String,object> tokenResponse = (Map<String,object>)JSON.deserializeUntyped(res.getbody());
            String accessToken = (String)tokenResponse.get('access_token');
            String getFilesList = getFilesFromFolder(accessToken);
            System.debug('Files List'+getFilesList);
        }else{
            System.debug('Failed'+res.getbody());
        }
    }
    
    public string getFilesFromFolder( String accessToken){
        
        Http http = new Http();
            Httprequest req = new Httprequest();
            req.setEndPoint('https://api.box.com/2.0/folders/279885973565/items');
            req.setmethod('GET'); 
            req.setHeader('Accept','application/json');
            req.setHeader('Authorization', 'Bearer '+ accessToken);
            // step3: send the response and handle the response
            HttpResponse res = http.send(req);
        
            System.debug('responsebody'+res.getBody());
            return res.getBody();
    }
    
        

}