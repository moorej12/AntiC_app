/** 
 * The remoteServer module provides an interface for the phone to
 * access the remote amazon server where the medical data is hosted.
 * The module can be used to check the connection to the server, check if
 * there are valid medical updates, and download those updates
 * 
 * @class remoteServer
 */

/** 
 * getLastUpdateTime() returns the stored timestamp of the last time
 * the phone downloaded medical data from the remote server (according 
 * to the server time).
 * 
 * @method getLastUpdateTime
 * @return {String} Timestamp of the last time medical data was downloaded
 */
function getLastUpdateTime() {
	// Gathers the timestamp of the last update from localStorage.
	// If no timestamp is stored, 
	if (localStorage.lastUpdateTimestamp == null) {
		// Occurs on the first instance of loading the application,
		// or if something has gone wrong.  Load all the data.
		return "0";
	}
	return localStorage.lastUpdateTimestamp
}

/**
 * Stores the last medical update timestamp onto the phone's localStorage
 * 
 * @method storeLastUpdateTime
 * @param {Object} The JSON object which contains the last medical update time
 */
function storeLastUpdateTime(data) {
	// Upon a successful update from the database, store the timestamp
	// in localStorage for future updates
	localStorage.lastUpdateTimestamp = data["lastUpdate"];
}

/**
 * Checks if there is a valid connection to the remote server, and whether or not
 * there are new medical updates to be downloaded.  If yes, downloads the medical
 * information and dose adjustment charts
 * 
 * @method fetchUpdatesFromServer
 */
function fetchUpdatesFromServer(){
	// Checks server for updates and prompts user to download new updates

	// Create a serverHandler object to interact with the remote server
	var serverHandler = new remoteServerHandler();

	if (serverHandler.isReachable()) {
		if (serverHandler.checkForUpdates()) {
			// If the remote server reports that there are new updates to be downloaded
			var startTime = (new Date).getTime();

			data = serverHandler.fetchData();
			dataString = JSON.stringify(data);

			if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
				// We're on a device, so use the File API to save the images
				
				// Initialize the array of image paths
				var imagePaths = new Array();
				for (i=0; i < data["dose_adjusts"].length; i++) {
					// Gather the chart paths from the raw data
					var chartVal = data["dose_adjusts"][i].chart;
				    if (chartVal != null && chartVal != "") { 
				    	if ($.inArray(chartVal, imagePaths) == -1) {
				    		// Create a list of the unique paths
				    		imagePaths.push(chartVal);
				        }
				    }
				}
		
				for (j=0; j < imagePaths.length; j++) {
					// Download the images from the remote server
				    downloadImageFromServer(imagePaths[j]);
				}
			}
			// Set the dataString into localStorge
			localStorage.setItem("data", dataString);
			// Store the timestamp associated with the last remote server update
			storeLastUpdateTime(data);
			
			// Log the time it took to download (Trials suggest ~1-2 seconds is normal
			console.log("Downloaded in: " + (((new Date).getTime() - startTime) / 1000) + " seconds.");
			
			// Alert the user
			alert("New medical updates have been downloaded.");
		}
	} 
}

/** 
 * remoteServerHandler class which handles the direct interaction with the server.
 * The communication is done via jQuery's .ajax calls
 * 
 * @class remoteServerHandler
 */
function remoteServerHandler() {

	this.fetchData = fetchData;
	this.checkForUpdates = checkForUpdates;
	this.isReachable = isReachable;

	/**
	 * fetchData uses an async ajax call to download all of the medical updates since
	 * the last time a download occurred
	 * 
	 * @method fetchData
	 * @return {String} Stringify'd JSON of the medical information
	 */
	function fetchData() {
		// Accesses the remote server API and returns the latest information from the database	
		jQuery.support.cors = true;
		var info = "";
		$.mobile.allowCrossDomainPages = true;
		$.ajax({
	    	url:'http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/api/dispatcher.php',
	    	dataType:"json",
			data: {"getAll": getLastUpdateTime()},
	    	timeout:10000,
	    	async: false,
	    	type:'GET',
	    	success:function(data) {
	        	info = data;
	    	},
	    	error:function(XMLHttpRequest,textStatus, errorThrown) {
	       		alert("Error status :"+textStatus);
	        	alert("Error type :"+errorThrown);
	        	alert("Error message :"+XMLHttpRequest.responseXML);
	    	}
		});
		return info;
	}

	/**
	 * Uses an ajax call to the AreUpdates server API function to see if there are
	 * new updates since the last time the medical data was updated
	 * 
	 * @method checkForUpdates
	 * @return {Boolean} Whether or not there are valid updates available for download
	 */
	function checkForUpdates() {
		// This function will send the last updated timestamp to the remote server
		// and return a boolean.
		// Returns True if there are updates to be fetched.
		// Returns False if there are no updates to be fetched.
		// Accesses the remote server API and returns the latest information from the database	
		jQuery.support.cors = true;
		var update_check = false;
		$.mobile.allowCrossDomainPages = true;
		$.ajax({
	    	url:'http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/api/dispatcher.php',
	    	dataType:"json",
			data: {"AreUpdates": getLastUpdateTime()},
	    	timeout:10000,
	    	async: false,
	    	type:'GET',
	    	success:function(data) {
	        	update_check = data;
	    	},
	    	error:function(XMLHttpRequest,textStatus, errorThrown) {
	       		alert("Error status :"+textStatus);
	        	alert("Error type :"+errorThrown);
	        	alert("Error message :"+XMLHttpRequest.responseXML);
	    	}
		});
		return update_check;
	}

	/**
	 * Uses an async ajax call to see if there is a valid connection to the remoteServer 
	 * (i.e. if the device has internet enabled, and the remote server is accessible)
	 * 
	 * @method isReachable
	 * @return {Boolean} Returns True if a connection can be established
	 */
	function isReachable() {
		// Uses an ajax call to test if the remote server is reachable
		var status = false;
		$.ajax({url: "http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/api/dispatcher.php",
	        type: "HEAD",
	        timeout:10000,
	        async: false,
	        statusCode: {
	            200: function (response) {
	                status = true;
	            }           
	        }
		});
		return status;
	}
}
