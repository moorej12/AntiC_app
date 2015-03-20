// Tests Server Class

function testServer() {

	this.testServerAPI = testServerAPI;
	// Function to test API and connection bewteen app and server
	function testServerAPI() {
		var dataOut;
		jQuery.support.cors = true;
		$.mobile.allowCrossDomainPages = true;
		$.ajax({
	    	url:'http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/dispatcher.php',
	    	//beforeSend: function(x) {
	        	//x.setRequestHeader('Authorization','username/pwd');
	    	//},
	    	dataType:"json",
		data: {"Update": "1990-02-01"},
	    	//contentType:'application/xml',
	    	timeout:10000,
	    	type:'GET',
	    	success:function(data) {
	        	//alert(JSON.stringify(data));
	        	localStorage.setItem("data", JSON.stringify(data));
	    	},
	    	error:function(XMLHttpRequest,textStatus, errorThrown) {
	       		alert("Error status :"+textStatus);
	        	alert("Error type :"+errorThrown);
	        	alert("Error message :"+XMLHttpRequest.responseXML);
	    	}
		});


	}

}