/**
 * Contains helper functions for cyppage.html to display the drug interaction information
 * to the user
 * 
 * @class cyppage
 */

/**
 * Returns the user back to the page that they came from after selecting the back button
 * 
 * @method decideBack
 */
function decideBack() {
	if(localStorage.backLink == 'drug') {
		window.location.assign('drug.html');
	} else {
		window.location.assign('interactions.html');
	}
}

/**
 * Creates interaction array from stored medical data
 * 
 * @method createIntArray
 * @param {String} Name of the current enzyme the user selected
 * @return {Object} Array of interaction objects pertaining to the selected enzyme 
 */
function createIntArray(currEnzyme) {
	// Creating a interaction array
	var tempArray = new Array();
	
	// Puts server data stored locally into variable
	var interacts = JSON.parse(localStorage.getItem("data"))["enzyme_interacts"];
	
	// Filter list based on enzyme name
	temp = interacts.filter(function(e) { return e.enzyme == currEnzyme });
	
	// Populates tempArray with all cyp interactions from JSON data
	for (var i=0;i < objLength(temp);i++) {
		tempArray[i] = new Interaction(temp[i].compound,temp[i].enzyme,temp[i].severity,temp[i].interaction);
	}
	
	return tempArray;
}
	
/**
 * Creates array of cyp enzymes based on the current interaction
 * 
 * @method createCypEnzymeArrays
 * @param {Object} List of interaction objects
 * @return {Object} List of related cyp enzyme objects
 */
function createCypEnzymeArrays(intArray) {
	// Creating a substrate array
	subArray = new Array();
	
	// Creating a inhibitor array
	inhArray = new Array();
	
	// Creating a inducer array
	indArray = new Array();
	
	// Populates the cyp enzyme array based on the interactions
	for (var i=0; i < intArray.length;i++) {
		if (intArray[i].getType() == "Substrate") {
			subArray.push(intArray[i]);
		} else if (intArray[i].getType() == "Inhibitor") {
			inhArray.push(intArray[i]);
		} else if (intArray[i].getType() == "Inducer") {
			indArray.push(intArray[i]);
		}
	}
	
	// Return the generated arrays
	return [subArray,inhArray,indArray];
}
	
/** Populates the menuList listview with (substrate, inhibitors, or inducer) interaction values
 * 
 * @method populateMenuList
 * @param {Object} List of cyp enzyme objects to display
 */
 function populateMenuList(cypArray) {
 	// Making sure listview is empty
 	$('#menuList').empty();

	// Sorting cyp array by the substance name
	cypArray = sort(cypArray,'subName');
	
	// Populates MenuList(Listview)
	var startTime = (new Date).getTime();
	if(cypArray.length > 0){
		$.each(cypArray, function( index, value ) {
			$('#menuList').append('<li data-icon="false" class="listitems2" id="' + index + '">' 
					              + '<div>' + addInteractionImage(cypArray[index].getSeverity().toLowerCase())
					              + '<span style="padding-left:50px"><b>' + cypArray[index].getSubName() 
					              + " (" + cypArray[index].getSeverity() 
					              + ")" + '</b></span></div></li>');
		});
		$('#menuList').listview('refresh');
	} else {
		$('#menuList').append('<li data-iconpos="right"><b>' 
 			+ "No Substances Found" + '</b></li>').listview('refresh');
	}
}

/**
 * Returns HTML markup for risk image based on the severity of the cyp enzyme
 * 
 * @method addInteractionImage
 * @param {String} Severity of the cyp enzyme
 * @return {String} HTML markup of the correct risk icon
 */
function addInteractionImage(severity){
	if(severity == 'weak'){
		return '<img src="Icons/lowicon2.png" style="vertical-align:middle">';
	}
	if(severity == 'moderate'){
		return '<img src="Icons/moderateicon2.png" style="vertical-align:middle">';
	}
	if(severity == 'strong'){
		return '<img src="Icons/highicon2.png" style="vertical-align:middle">';
	}
	if(severity == 'unknown'){
		return '<img src="Icons/interaction4image.png" style="vertical-align:middle">';
	}
}
