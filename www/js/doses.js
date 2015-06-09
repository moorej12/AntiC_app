/** 
 * Contains helper functions to be used to populate the list of dose adjustments for the user
 * 
 *  @class doses
 */

/**
 * Creates list of dose adjustments from the stored medical data
 * 
 * @method createDoseAdjustmentArray
 * @return {Object} List of dose adjustment objects
 */
function createDoseAdjustmentArray() {
	// Gather drug information from localStorage
	var data = JSON.parse(localStorage.getItem("data"));

	if (data == null)  {
		// Happens if the user opens the app for the first time and chooses not to download information
		// Prompt the user and return an empty list.
		alert("Please restart the application with internet access to download medical information.");
		return new Array();
	}
	// Gather the dose adjustments
	var doseData = data["dose_adjusts"];
	var protocolData = data["protocols"];

	// Creates dose array
	var doseArray = new Array();
    var protocolArray = new Array();
	// Populates tempArray with all dose adjustment with an existing chart
	for (i=0; i < doseData.length; i++) {
		// Gather the chart paths from the raw data
		var chartVal = doseData[i].chart;
	    if (chartVal != null) { 
	    	if ($.inArray(chartVal, doseArray) == -1) {
	    		// Create a list of the unique paths
	    		doseArray.push(chartVal);
	        }
	    }
	}
	for (i=0; i < protocolData.length; i++) {
		var chartVal = protocolData[i].image;
		var chartValArray = chartVal.split(".");
		chartVal = chartValArray.join("protocol.");
		if (chartVal != null) {
			if ($.inArray(chartVal, doseArray) == -1) {
				protocolArray.push(chartVal);
			}
		}
	}
    var bothArray = new Array();
    var i = 0;
    var j = 0;
    while (i < doseArray.length && j < protocolArray.length) {
        var doseSplit = doseArray[i].split("/");
        var protSplit = protocolArray[j].split("/");
        var doseName = doseSplit[doseSplit.length];
        console.log(doseName);
        var protName = protSplit[protSplit.length];
        console.log(protName);
        if(doseName < protName) {
            bothArray.push(doseArray[i]);
            i++;
        } else {
            bothArray.push(protocolArray[j]);
            j++;
        }
    }
    if(i<doseArray.length) {
        for(i = i; i < doseArray.length; i ++) {
            bothArray.push(doseArray[i]);
        }
    } else {
        for(j = j; j < protocolArray.length; j++) {
            bothArray.push(protocolArray[j]);
        }
    }

	return bothArray;
}

/**
 * Populates the menuList listview with the dose adjustment objects
 * 
 * @method populateDoseList
 * @param {Object} List of dose adjustment objects
 */
function populateDoseList(doseAdjustArray) {
	// Clear the menuList
	$('#menuList').empty();
	$('#menuList').listview();
	
	// Set the remote server base path
	var remoteServerBasePath = "http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/";

	$.each(doseAdjustArray, function(index, value) {
		var filePath = "";
		var fileEnding = "";
		// Get the name of the dose adjust with capitalization 
        if (value.search(".jpg") > 0) {
            fileEnding = ".jpg";
        } else {
            fileEnding = ".jpeg";
        }
		var displayVal = toTitleCase(value.split("/").pop().split(fileEnding)[0].replace("_", " - "));
		
		// Populating MenuList(Listview) 
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
			// Handle the case on the phone
			var imageName = value.split("/").pop();
			filePath = localStorage.fileSystemRoot + "/anticData/" + imageName;
		} else {
			// Handle the case on webOS
			filePath = remoteServerBasePath + value;
		}
		$('#menuList').append('<li data-icon="false" class="listitems">'
				  + '<a href="javascript:void(0)" onclick=loadDoseChartPage(this.name)'
				  + ' id="' + index + '" name="' + filePath + '">' 
				  + displayVal + '</a></li>');
	});
	$('#menuList').listview('refresh');
}

/**
 * Simply capitalizes the first letter of each word in the string
 * 
 * @method toTitleCase
 * @param {String} String to capitalize
 * @return {String} String after capitalization
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, 
    	function(txt){ 
    		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
}

/**
 * Loads dose chart image in a new page
 * 
 * @method loadDoseChartPage
 * @param {String} Path to the file stored on the phone, or the url to the file if on webOS
 */
function loadDoseChartPage(filePath) {
	// Stores current dose chart in local storage for viewing later
	localStorage.setItem("currentDoseChart", filePath);

	// Relocate window to dosechart.html
	window.location.assign("dosechart.html");
}