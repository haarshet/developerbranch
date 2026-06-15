/**
* @File Name : exploreApexContinuation.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : October 20, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | October 20, 2024 |   | Initial Version
**/

public class exploreApexContinuation {

	

 @AuraEnabled(continuation=true cacheable=true)
	Public static object startRequest(){

		//1. Instantiate continuation class

		Continuation con = new Continuation (40);

		con.ContinuationMethod = 'processResponse';

		con.state = 'HEY!! BOSS';

	
       String apikey = API_Token_Controller.API_Key;
       System.debug('apikey'+apikey);
       String endpoint = 'callout:Youtube?part=snippet&q=salesforce&key='+apikey;

		HttpRequest req = new HttpRequest ();
		req.setMethod('GET');
		req.setEndPoint(endpoint);

		con.addHttpRequest(req);
		return con;


		
	}


	@AuraEnabled(cacheable=true)
	public static string processResponse ( List<String> labels , Object state){

		HttpResponse response = Continuation.getresponse(labels[0]);

		 String result = response.getBody();

		 return result;

	}
}