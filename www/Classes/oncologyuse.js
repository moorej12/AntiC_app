/**
 * Object which contains the oncology use information of the drug
 * 
 * @class oncologyUseObject
 */

/**
 * Constructor function to create oncology use object
 * 
 * @method oncologyUse
 * @param {String} Approval of the object
 * @param {String} Type of cancer the drug is used for
 * @return {Object} Created oncology object
 */
function oncologyUse(approved, cancerType) {
	// Constructing Variables
	this.approved = approved;
	this.cancerType = cancerType;
	
	//Setting functions to object
	this.getApproved = getApproved;
	this.getCancerType = getCancerType;
}

/**
 * Return oncology use's approved value
 * 
 * @method getApproved
 * @return {String} Approved level
 */
function getApproved() {
	return this.approved;
}

/**
 * Return oncology use's cancer type
 * 
 * @method getCancerType
 * @return {String} Cancer type
 */
function getCancerType() {
	return this.cancerType;
}
