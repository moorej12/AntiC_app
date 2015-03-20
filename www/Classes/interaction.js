/**
 * Interaction object which contains information of various drug-drug interactions
 * 
 * @class interactionObject
 */

/**
 * Constructor function to create interaction object
 * 
 * @method Interaction
 * @param {String} Name of substrate
 * @param {String} Name of cyp enzyme
 * @param {String} Severity of interaction
 * @param {String} Type of interaction
 * @return {Object} Created interaction object
 */
function Interaction(subName, cypName, severity, type) {
	// Constructing Variables
	this.subName = subName;
	this.cypName = cypName;
	this.severity = severity;
	this.type = type;
	
	//Setting functions to object
	this.getSubName = getSubName;
	this.getCyp = getCyp;
	this.getSeverity = getSeverity;
	this.getType = getType;
}

/**
 * Returns the substrate name of the interaction
 * 
 * @method getSubName
 * @return {String} Name of the substrate
 */
function getSubName() {
	return this.subName;
}
	
/**
 * Returns the cyp enzyme name of the interaction
 * 
 * @method getCyp
 * @return {String} Name of the cyp enzyme
 */
function getCyp() {
	return this.cypName;
}

/**
 * Returns the severity of the interaction
 * 
 * @method getSeverity
 * @return {String} Severity of the interaction
 */
function getSeverity() {
	return this.severity;
}

/**
 * Returns the type of the interaction
 * 
 * @method getType
 * @return {String} Type of the interaction
 */
function getType() {
	return this.type;
}