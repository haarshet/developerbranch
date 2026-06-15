({
	handleSendInfo : function(component, event, helper) {
        
        let fName = component.get('v.firstName');
        let lName = component.get('v.lastName');
		let prof= component.get('v.profession');
        
        console.log('profession',fName );
        
        let data = {
            firstName: fName,
            lastName: lName,
            profession: prof,
        }
        
        component.find('generalInfo').publish(data);
	}
})