({
	handleSendData : function(component, event, helper) {
        
        let rId = component.get ('v.recordId');
        
        // Step 2 to get access to lightning message channel
        
        let payLoad = {
            recordId : rId,
            name: 'Test Harish'
            
        }
        component.find('accountMessageChannel').publish(payLoad);
        
		
	}
})