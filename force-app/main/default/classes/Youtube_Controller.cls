public class Youtube_Controller {
    public string body {get;set;}
    public superItemList[] datalist {get;set;} //custom defined class , it will like primitive datatype
    public string searchQuery {get;set;}
    public string santisiedSearchQuery ;
    
    public void search (){
        // business logic
        // datalist stores the list of variables  
       datalist = new superItemList[]{}; //creating the instance of the datalist to store the vaiables
           
       santisiedSearchQuery = searchQuery.replaceAll(' ','+');
       string apikey = API_Token_Controller.API_Key;
       System.debug('apikey'+apikey);
       String endpoint = 'callout:Youtube?part=snippet&q='+santisiedSearchQuery+'&key='+apikey;

        // Step1: Instantiate HTTP class
        Http http = new Http ();
        
        // Step2: Instantiate HTTP request class and frame the request
        HttpRequest request = new HttpRequest();
        request.setHeader('Accept','application/json');
        request.setEndPoint(endPoint);
        request.setmethod('GET'); 
        // step3: send the response and handle the response
        HttpResponse response = http.send(request);
        body = response.getbody();
        
        fromJSON d = (fromJSON)JSON.deserialize(body,fromJSON.class);
        system.debug('itemKind'+d.items[0].kind);
        
        for (Integer i=0; i< d.items.size(); i++){
            
            //Add values to the dataset
            //This will be a list of lists.
            datalist.add(new superItemList( d.items[i].snippet.title, d.items[i].snippet.description, d.items[i].snippet.thumbnails.medium.url, d.items[i].snippet.publishedAt)); 
            //system.debug('datalist--'+datalist);
        }
        system.debug('datalist--'+datalist); 
    }
    
    public class superItemList{
        public string title{set;get;}
        public string description{set;get;}
        public string url{set;get;}
        public string publishtime{set;get;}
        
        public superItemList(string title,string description,string url,string publishtime){
            this.title = title;
            this.description = description;
            this.url = url;
            this.publishtime = publishtime;
            
            
        }
    }
    
    
     
public class fromJSON{
	public String kind;	//youtube#searchListResponse
	public String etag;	//xeGgVKAfmgtzaxfFuWjBa6qaEJM
	public String nextPageToken;	//CAUQAA
	public String regionCode;	//JP
	public cls_pageInfo pageInfo;
	public cls_items[] items;

	
}
    
    class cls_pageInfo {
        public Integer totalResults;	//1000000
        public Integer resultsPerPage;	//5
    }
    class cls_items {
		public String kind;	//youtube#searchResult
		public String etag;	//Uqs6LR9YZ7Pvc0yVoe4cTOvLN8w
		public cls_id id;
		public cls_snippet snippet;
	}
	class cls_id {
		public String kind;	//youtube#channel
		public String channelId;	//UCUpquzY878NEaZm5bc7m2sQ
	}
	class cls_snippet {
		public String publishedAt;	//2006-08-03T21:52:39Z
		public String channelId;	//UCUpquzY878NEaZm5bc7m2sQ
		public String title;	//Salesforce
		public String description;	//Salesforce is the #1 AI CRM, helping companies connect with customers in a whole new way since 1999. Our product portfolio ...
		public cls_thumbnails thumbnails;
		public String channelTitle;	//Salesforce
		public String liveBroadcastContent;	//none
		public String publishTime;	//2006-08-03T21:52:39Z
	}
	class cls_thumbnails {
		public cls_default default_x;
		public cls_medium medium;
		public cls_high high;
	}
	class cls_default {
		public String url;	//https://yt3.ggpht.com/ZIPvInnj50dYnGYvkanm_IYcoYaofSY47e_4iah-EoCduSdhxYOC_-TCatm9XR3HAp1HJeomAa0=s88-c-k-c0xffffffff-no-rj-mo
	}
	class cls_medium {
		public String url;	//https://yt3.ggpht.com/ZIPvInnj50dYnGYvkanm_IYcoYaofSY47e_4iah-EoCduSdhxYOC_-TCatm9XR3HAp1HJeomAa0=s240-c-k-c0xffffffff-no-rj-mo
	}
	class cls_high {
		public String url;	//https://yt3.ggpht.com/ZIPvInnj50dYnGYvkanm_IYcoYaofSY47e_4iah-EoCduSdhxYOC_-TCatm9XR3HAp1HJeomAa0=s800-c-k-c0xffffffff-no-rj-mo
	}



}