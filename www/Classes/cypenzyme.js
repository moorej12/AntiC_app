/**
 * Cyp Enzyme object
 * 
 * @class cypEnzyme
 */

/**
 * Constructor method for cyp enzyme object
 * 
 * @method cypEnzyme
 * @param {String} Name of the enzyme
 */
function cypEnzyme(name){
	// Constructing Variables
	this.name = name;
	
	//Setting functions to object
	this.getName = getName;
}

/**
 * Returns the name of the cypEnzyme object
 * 
 * @method getName
 * @return {String} Name of the object
 */
function getName(){
	return this.name;
}

