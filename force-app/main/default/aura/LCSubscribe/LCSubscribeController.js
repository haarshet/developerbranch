({
	handleMessage : function(component, event, helper) {
        
        if( event !== null && event.getParams !== null){
            let p = event.getParams();
            component.set('v.receivedMessage', JSON.stringify(p, null, "\t"));
        }

		
	}
})