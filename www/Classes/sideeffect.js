/**
 * Object to contain information of the different side effects of the drug
 * 
 * @class sideEffectObject
 */

/**
 * Constructor function to create side effect object
 * 
 * @method sideEffect
 * @param {String} Name of side effect
 * @param {String} Severity of side effect
 * @return {Object} Created side effect object
 */
function sideEffect(name, severity) {
	// Constructing Variables
	this.name = name;
	this.severity = severity;
	
	//Setting functions to object
	this.getName = getName;
	this.getSeverity = getSeverity;
}

/**
 * Returns the name of the side effect
 * 
 * @method getName
 * @return {String} Name of the side effect
 */
function getName() {
	return this.name;
}

/**
 * Returns the severity of the side effect
 * 
 * @method getSeverity
 * @return {String} Severity of the side effect
 */
function getSeverity() {
	return this.severity;
}
