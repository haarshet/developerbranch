public without sharing class salesforceCloudVision {
    public salesforceCloudVision() {

    }
    @AuraEnabled(cacheable=true)
    public static string getCloudVision(){

        Http http = new Http();

        String requestBody= '{ "requests": [ { "features": [ { "maxResults": 5, "type": "LABEL_DETECTION" } ], "image": { "source": { "imageUri": "gs://cloud-samples-data/vision/label/setagaya.jpeg" } } } ] }';

        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setEndPoint('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB20mxZIINERGW_HIrvYm8Id5imOQfgpzY');
        req.setBody(requestBody);

        HttpResponse res = http.send(req);

        if(res.getStatusCode() == 200){
            return res.getBody();
        }
        return 'Something fishy';

    }

}