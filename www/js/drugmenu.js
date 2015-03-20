/** 
 * Contains helper functions used by drugmenu.html to populate the list of drugs
 * to display to the user.
 * 
 * @class drugmenu
 */

/**
 * Sorts the menuList by name
 * 
 * @method sortName
 */
function sortName() {
	if(localStorage.currentSort == "nameA") {
		localStorage.currentSort = "nameZ";
	} else {
		localStorage.currentSort = "nameA";
	}
		
	$('#menuList').empty();
	$('#menuList2').empty().listview('refresh');
		
	// If trade name is checked
	if ($('#select-based-flipswitch').val() == 'trade') {
		// Sorts by trade name
		drugArray = sort(drugArray,'tradeName');
		
		// Populates menuList(Listview) with drugArray
		if (localStorage.currentSort == "nameZ") {
			drugArray.reverse();
		}
		populateMenuList(drugArray,true);
	} else {
		// If generic name is checked    		
		// Sorts by generic name
		drugArray = sort(drugArray,'genName');
		
		// Populates menuList(Listview) with drugArray
		if(localStorage.currentSort == "nameZ"){
			drugArray.reverse();
		}
		populateMenuList(drugArray,false);	
	} 			
}
	
/**
 * Sorts the menuList by risk level
 * 
 * @method sortRisk
 */
function sortRisk() {
	if (localStorage.currentSort == "riskLow") {
		localStorage.currentSort = "riskHigh";
		if($("#select-based-flipswitch").val() == "generic") {
			// Sorts by risk, generic name, and whether array is reversed or not			
			drugArray = riskSort(drugArray,'genName',false);
			
			// Populates menuList(Listview) with drugArray
			populateMenuList(drugArray,false);
		} else {
			// Sorts by risk, trade name, and whether array is reversed or not
			drugArray = riskSort(drugArray,'tradeName',false);
					
			// populates menuList(Listview) with drugArray
			populateMenuList(drugArray,true);
		}
		
	} else {
		localStorage.currentSort = "riskLow";
		if ($("#select-based-flipswitch").val() == "generic") {
			// Sorts by risk, generic name, and whether array is reversed or not			
			drugArray = riskSort(drugArray,'genName',true);
					
			// Populates menuList(Listview) with drugArray
			populateMenuList(drugArray,false);
		} else {
			// Sorts by risk, trade name, and whether array is reversed or not
			drugArray = riskSort(drugArray,'tradeName',true);
					
			// Populates menuList(Listview) with drugArray
			populateMenuList(drugArray,true);
		}
	}
}

/**
 * Loads drugs information page based off index from listview
 * 
 * @method loadDrugPage
 * @param {Integer} Index of the selected drug
 */
function loadDrugPage(j) {
	// Stores current drugs in local storage for viewing later
	localStorage.setItem("currentDrug", JSON.stringify(drugArray[j]));
	localStorage.setItem("drugState", ['x','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']);
	// Loads drug information page
	window.location.assign("drug.html");
}

/** 
 * Populates MenuList(Listview) with drugArray value and based on whether trade/gen is needed
 * 
 * @method populateMenuList
 * @param {Object} drugArray - List of drug objects 
 * @param {Boolean} isTradeName - If true, populate via trade name.  If false, populate via generic name
 */
function populateMenuList(drugArray,isTradeName){
	$('#menuList').empty();
	$('#menuList').listview();
	$.each(drugArray, function( index, value ) {
		if(isTradeName == false){
			// Populating MenuList(Listview) 
	  		$('#menuList').append('<li data-icon="false" data-iconpos="right" class="listitems">' + 
	  							  '<a href="drug.html" id="' + index  + '" title="' + 
	  							  drugArray[index].getGenName() + 'Item" onclick=loadDrugPage(this.id)>' + 
	  							  '<img src="Icons/' + drugArray[index].getRisk().toLowerCase() +
	  							  'icon2.png">' + drugArray[index].getGenName() + " (" + 
	  							  drugArray[index].getTradeName() + ')</a></li>');
		} else {
			// Populating MenuList(Listview)
	  		$('#menuList').append('<li data-icon="false" data-iconpos="right" class="listitems">' +
	  				              '<a href="drug.html" id="' + index + '" title="' + 
	  				              drugArray[index].getGenName() + 'Item" onclick=loadDrugPage(this.id)>' +
	  				              '<img src="Icons/' + drugArray[index].getRisk().toLowerCase() + 
	  				              'icon2.png">' + drugArray[index].getTradeName()+ " (" + 
						          drugArray[index].getGenName() + ')</a></li>');	
		}
	});
	$('#menuList').listview('refresh');
}

/**
 * Creates DrugArray from JSON data
 * 
 * @method createDrugArray
 * @return {Object} List of drug objects created from the medical data
 */
function createDrugArray() {
	// Gather drug information from localStorage
	var data = JSON.parse(localStorage.getItem("data"));
	
	if (data == null)  {
		// Happens if the user opens the app for the first time and chooses not to download information
		// Prompt the user and return an empty list.
		alert("Please restart the application and download medical information.");
		return new Array();
	}
	
	// Accessing drugs from JSON data
	var temp = data['drugs'];
	
	// Creates temporary array
	var tempArray = new Array();
	
	// Populates tempArray with all drugs from JSON data
	for (var i=0;i < objLength(temp);i++) {
		tempArray[i] = new Drug(temp[i].t_name, temp[i].risk, temp[i].g_name,
								temp[i].classification, temp[i].last_revision, 
								temp[i].monitoring, temp[i].administration, 
								temp[i].pregnancy,  temp[i].breastfeeding, 
								temp[i].fertility, temp[i].metabolism, 
								temp[i].uo_dose, temp[i].available, 
								temp[i].excretion, temp[i].contraindications,
								"", "","", "","",temp[i].other_interacts,temp[i].qt_prolonging, 
								temp[i].anti_neoplastic,temp[i].frequency);
	}
    console.log("finished loading array");
	return tempArray;		
}
