/**
 * Contains helper functions for the interactions page to display the 
 * list of drug-drug interactions
 * 
 * @class interaction
 */

/**
 * Loads the selected interaction page by setting the ID of the selected interaction in 
 * localstorage, and transitioning to cyppage.html 
 * 
 * @method loadInteractPage
 * @param {Integer} The ID of the selected interaction to display
 */
function loadInteractPage(j) {
	// Stores select cyp enzyme for use in cypPage.html
	localStorage.setItem("currentEnzyme",cypArray[j].getName());	
	localStorage.backLink = 'interactions';
	localStorage.intTab = 'substrate';
	// Loads cypPage.html
	window.location.assign('cyppage.html');
}

/** 
 * Uses the stored medical data to create the array of cyp enzymes to display to the user
 * 
 * @method createCypArray
 * @return {Object} List of cyp enzyme objects to display
 */
function createCypArray() {
	// Creating a cyp enzyme array
	var tempArray = new Array();
	
	// Puts server data stored locally into variable
	var data = JSON.parse(localStorage.getItem("data"));
	
	// Accessing cyp enzymes from JSON data
	var temp = data['cyp_enzymes'];
	
	// Populates tempArray with all cyp enzymes from JSON data
	for (var i=0;i < objLength(temp);i++) {
		tempArray[i] = new cypEnzyme(temp[i].name);
	}
	return tempArray;
}

/**
 * Populates the interactions.html menu listview with the enzymes in the created cyp array
 * 
 * @method populateMenuList
 * @param {Object} List of cyp enzymes to display
 */
function populateMenuList(cypArray) {
	$.each(cypArray, function(index, value) {
		$('#menuList').append('<li data-icon="false" data-iconpos="right"><a class="show-page-loading-msg"  id="' 
							  + index + '" title = "' + cypArray[index].getName() + 'Item">' 
							  + cypArray[index].getName()+ '</a></li>');
	});
	$('#menuList').listview('refresh');
}