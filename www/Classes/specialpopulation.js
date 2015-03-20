/**
 * Object to contain information of the different special populations of the drug
 * 
 * @class specialPopulationObject
 */

/**
 * Constructor function to create side effect object
 * 
 * @method specialPopulation
 * @param {String} Name of special population
 * @param {String} Note associated with the special population
 * @return {Object} Created special population object
 */

function specialPopulation(name, note){
	// Constructing Variables
	this.name = name;
	this.note = note;
	
	//Setting functions to object
	this.getName = getName;
	this.getNote = getNote;
}

/**
 * Returns the name of the special population
 * 
 * @method getName
 * @return {String} Name of the interaction
 */
function getName() {
	return this.name;
}

/**
 * Returns the note of the special population
 * 
 * @method getNote
 * @return {String} Note of the special population
 */
function getNote() {
	return this.note;
}
