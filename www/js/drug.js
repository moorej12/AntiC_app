/**
 * Contains helper functions used to display the relevant drug information to the user
 * 
 * @class drug
 */

/**
 * Before leaving the drug.html page, store the current state of the collapsible headers 
 * into the localStorage 'drugState' variable.
 * 
 * @method gatherState
 */
function gatherState() {
	// Gathers the state of the collapsible headers incase the user wants to return
	var cArray = new Array();
	cArray[0] = "x";
	if($('#c1').collapsible("option", "collapsed") == true){cArray[1]="0";} else {cArray[1]="1";}
	if($('#c2').collapsible("option", "collapsed") == true){cArray[2]="0";} else {cArray[2]="1";}
	if($('#c3').collapsible("option", "collapsed") == true){cArray[3]="0";} else {cArray[3]="1";}
	if($('#c4').collapsible("option", "collapsed") == true){cArray[4]="0";} else {cArray[4]="1";}
	if($('#c5').collapsible("option", "collapsed") == true){cArray[5]="0";} else {cArray[5]="1";}
	if($('#c6').collapsible("option", "collapsed") == true){cArray[6]="0";} else {cArray[6]="1";}
	if($('#c7').collapsible("option", "collapsed") == true){cArray[7]="0";} else {cArray[7]="1";}
	if($('#c8').collapsible("option", "collapsed") == true){cArray[8]="0";} else {cArray[8]="1";}
	if($('#c9').collapsible("option", "collapsed") == true){cArray[9]="0";} else {cArray[9]="1";}
	if($('#c10').collapsible("option", "collapsed") == true){cArray[10]="0";} else {cArray[10]="1";}
	if($('#c11').collapsible("option", "collapsed") == true){cArray[11]="0";} else {cArray[11]="1";}
	if($('#c12').collapsible("option", "collapsed") == true){cArray[12]="0";} else {cArray[12]="1";}
	if($('#c13').collapsible("option", "collapsed") == true){cArray[13]="0";} else {cArray[13]="1";}
	if($('#c14').collapsible("option", "collapsed") == true){cArray[14]="0";} else {cArray[14]="1";}
	if($('#c15').collapsible("option", "collapsed") == true){cArray[15]="0";} else {cArray[15]="1";}
	if($('#c16').collapsible("option", "collapsed") == true){cArray[16]="0";} else {cArray[16]="1";}
	localStorage.setItem("drugState", cArray);	
}

/**
 * Upon 'backing' from a selected link, resume the state of the collapsible headers by 
 * loading from the 'drugState' variable in localStorage
 * 
 * @method setState
 */
function setState() {
	// Load state from localStorage
	cArray = localStorage.getItem("drugState");
	cArray = cArray.split(",");
	if(cArray[1] == "1"){$('#c1').collapsible("expand");}
	if(cArray[2] == "1"){$('#c2').collapsible("expand");}
	if(cArray[3] == "1"){$('#c3').collapsible("expand");}
	if(cArray[4] == "1"){$('#c4').collapsible("expand");}
	if(cArray[5] == "1"){$('#c5').collapsible("expand");}
	if(cArray[6] == "1"){$('#c6').collapsible("expand");}
	if(cArray[7] == "1"){$('#c7').collapsible("expand");}
	if(cArray[8] == "1"){$('#c8').collapsible("expand");}
	if(cArray[9] == "1"){$('#c9').collapsible("expand");}
	if(cArray[10] == "1"){$('#c10').collapsible("expand");}
	if(cArray[11] == "1"){$('#c11').collapsible("expand");}
	if(cArray[12] == "1"){$('#c12').collapsible("expand");}
	if(cArray[13] == "1"){$('#c13').collapsible("expand");}
	if(cArray[14] == "1"){$('#c14').collapsible("expand");}
	if(cArray[15] == "1"){$('#c15').collapsible("expand");}
	if(cArray[16] == "1"){$('#c16').collapsible("expand");}
}

/**
 * Populates the list of interactions for the selected drug
 * 
 * @method createInteractionList
 * @param {Object} Interaction - The current interaction to populate 
 * @param {Object} Cyp - The current cyp enzyme to populate
 * @return {String} List of relevant interactions
 */
function createinteractionList(interaction, cyp) {
	// Creates temporary array
	var listOfTypes= new Array();

	for (var i = 0; i < interaction.length; i++) {
		var state = true;
		for(var j = 0;j < listOfTypes.length; j++) {
			if(listOfTypes[j] == interaction[i].interaction) {
				state = false;
			}		
		}				
		if(state == true) {					
			listOfTypes.push(interaction[i].interaction);
		}				
	}
	for (var i = 0; i < cyp.length; i++) {
		var state = true;
		for (var j = 0;j < listOfTypes.length; j++) {				
			if (listOfTypes[j] == cyp[i].drug_effect_type) {
				state = false;
			}		
		}				
		if (state == true) {					
			listOfTypes.push(cyp[i].drug_effect_type);
		}				
	}
	return listOfTypes;
}

/** 
 * Creates the text markup for the monitoring header
 * 
 * @method createMonitoring
 * @return {String} HTML markup for the monitoring category
 */
function createMonitoring() {
	var re = new RegExp("NCI Common Toxicity Criteria","i");
	var temp = drug.getMonitoring().replace(/[|]/g,"</br>");
	temp = temp.replace(re, "<a href='#' onclick=\"window.open('" +
			"http://www.acrin.org/Portals/0/Administration/Regulatory/CTCAE_4.02_2009-09-15_QuickReference_5x7.pdf', " +
			"'_system');\">NCI Common Toxicity Criteria</a>");
	return temp;
}

/** 
 * Creates the text markup for the oncology use header
 * 
 * @method createOncologyUseData
 * @return {String} HTML markup for the oncology use category
 */
function createOncologyUseData() {
	var temp = "";
	for(var i = 0; i < onc_use.length;i++){
		if(onc_use[i].approved == 1){
			temp = temp + "<b>Approved:</b> " + onc_use[i].cancer_type + "</br>";
		} else {
			temp = temp + "<i>Not Approved:</i> " + onc_use[i].cancer_type + "</br>";
		}
	}
	return temp;
}

/** 
 * Creates the text markup for the special populations header
 * 
 * @method createSpecPopData
 * @return {String} HTML markup for the special populations category
 */
function createSpecPopData() {
	temp = "";
	for (var i = 0; i < precaution.length; i++) {
		temp = temp + "<b>" + precaution[i].name + ":  </b> " + precaution[i].note + "</br>";
	}
	return temp;
}

/** 
 * Creates the text markup for the side effects header
 * 
 * @method createSideEffectData
 * @return {String} HTML markup for the side effects category
 */
function createSideEffectData() {
	temp = "";
	temp = temp + "<b>(" + drug.getFreq() + ")</b></br></br>";
	for (var i = 0; i < side.length; i++) {
		if(side[i].severe == 1) {
			temp = temp + "<b><i>" + side[i].name + "</i></b>, ";
		} else {
			temp = temp + "" + side[i].name + ",";
		}
	}
	return temp;
}

/** 
 * Creates the text markup for the interaction header
 * 
 * @method createInteractionData
 * @param {Object} Interaction object to display
 * @param {Object} Cyp enzyme object to display
 * @param {Object} Current drug being displayed
 * @return {String} HTML markup for the interaction category
 */
function createInteractionData(interaction, cyp, drug) {
	listOfTypes = createinteractionList(interaction, cyp);
	interactionOut = "";

	for (var m = 0; m < listOfTypes.length; m++) {
		interactionOut = interactionOut + "<b>" + listOfTypes[m] + ":</b></br>";
		for (var i = 0; i < interaction.length; i++) {
			if (interaction[i].interaction == listOfTypes[m]) {
				interactionOut = interactionOut + "     " + interaction[i].compound + "</br>";
			}
		}	
		for (var i = 0; i < cyp.length; i++) {
			if (cyp[i].drug_effect_type == listOfTypes[m]) {
				interactionOut = interactionOut + "     " +  cyp[i].enzyme + " - " + cyp[i].enzyme_effect_type  + "s</br>";
			}
		}
	}
	if (drug.getOtherInteract() != '') {
		interactionOut = interactionOut + "     <b>Other: </b>" +  drug.getOtherInteract() + "</br>";
	}
	if (drug.getQtProlonging() != '') {
		interactionOut = interactionOut.replace('<b>'+drug.getQtProlonging()+":"+"</b>","<b>"+ drug.getQtProlonging()+":"+"</b>"+"</br>"+"Qt Prolonging");
	}
	if (drug.getNeo() == "1") {
		interactionOut = interactionOut + "</br>Caution with other anti-neoplastic agents (unless per protocol)";
	}
	interactionOut = interactionOut.replace(/[|]/g,"</br>");
	
	//This loop dynamically creates hyperlinks to the interactions page
	for (var i = 0; i < intArray.length; i++) {
		var re = new RegExp("" + intArray[i].name + " - Inducers", "g");
		interactionOut = interactionOut.replace(re,"<a href='cyppage.html' onClick=cypHyperLink(" + i + ",'inducer')>" + intArray[i].getName() + " - Inducers</a>");
		re2 = new RegExp("" + intArray[i].name + " - Inhibitors", "g");
		interactionOut = interactionOut.replace(re2,"<a href='cyppage.html' onClick=cypHyperLink(" + i + ",'inhibitor')>" + intArray[i].getName() + " - Inhibitors</a>");
		re3 = new RegExp("" + intArray[i].name + " - Substrates", "g");
		interactionOut = interactionOut.replace(re3,"<a href='cyppage.html' onClick=cypHyperLink(" + i + ",'substrate')>" + intArray[i].getName() + " - Substrates</a>");
	}
	var re = new RegExp("PGP","g");
	interactionOut = interactionOut.replace(re,"<a href='cyppage.html' onClick=pgpHyperLink(this.href)>PGP</a>");
	return interactionOut;
}

/**
 * Saves the necessary state variables to prepare for a transition to cyppage.html
 * 
 * @method cypHyperLink
 * @param {Integer} ID of the selected cyp enzyme
 * @param {String} Type of enzyme to transition to inside cyppage.html
 */
function cypHyperLink(j, type) {
	localStorage.backLink = "drug";
	localStorage.setItem("currentEnzyme",intArray[j].getName());
	localStorage.intTab = "" + type;
	// Transition to cyppage via hyperlink
	window.location.assign('cyppage.html');	
	gatherState();
}

/**
 * Saves the necessary state variables to prepare for a transition to the pgp cyp enzyme page
 * 
 * @method pgpHyperLink
 * @param {String} url to transition to
 */
function pgpHyperLink(url) {
	localStorage.backLink = "drug";
	localStorage.intTab = "substrate";
	localStorage.setItem("currentEnzyme","P Glycoprotein");
	// Transition to pgp pages via hyperlink
	window.location.assign(url);	
}

/**
 * Creates the array to store the dose adjustment objects
 * 
 * @method createDoseAdjustment
 * @return {Object} List of dose adjustment objects
 */
function createDoseAdjustment() {
	temp = "";
	for (var i = 0; i < dose.length; i++) {
		temp = temp + "<p><b>" + dose[i].problem + ":   </b>" + dose[i].note + "</br></p>";
	}
	return temp;
}

/**
 * Returns the risk color associated with the selected drug
 * 
 * @method getRiskColor
 * @return {String} Color associated with the drug (low = green, moderate = yellow, high = red)
 */
function getRiskColor() {
       if (drug.getRisk().toLowerCase() == "low") {
               return "green";
       } else if (drug.getRisk().toLowerCase() == "moderate") {
               return "yellow";
       } else if (drug.getRisk().toLowerCase() == "high") {
               return "red";
       }
}

console.log("drug.js is working!");