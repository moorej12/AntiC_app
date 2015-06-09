/**
 * Object for the individual drugs
 * 
 * @class drugObject
 */
//*****************
//Variables: 
//Drugs Commercial Name - tradeName
//Drugs Risk - risk
//Drugs Scientific Name - genName
//Drugs Classification - classification
//Drugs Last Revision - last Rev
//Drugs Monitoring - monitoring
//Drugs Administration - admin
//Drugs Pregnacy Info - preg
//Drugs Breastfeeding Info - breastfeed
//Drugs fertility - fertility
//Drugs metabolism  - metabolism
//Drugs Usual Oral Dose - usualoraldose
//Drugs Available - available
//Drugs Excretion - excretion
//Drugs Contraindications - contrain
//Drugs Special Populations - specialpop
//Drugs Oncology Use - oncology
//Drugs Side Effects  - sideeffects
//Drugs Dose Adjustments - doseadjust
//Drugs Other Interactions
//Drugs QT Prolonging
//Drugs Anti-Neoplastic
//Drugs Frequency
//*****************

/**
 * Constructor for the drug object
 * 
 * @method Drug
 * @return {Object} Returned drug object
 */
function Drug(tradeName, risk, genName, classification, lastRev, monitoring, admin,
		      preg, breastfeed, fertility, metabolism, usualoraldose, available,
	          excretion, contrain, specialpop, oncology, sideeffects, doseadjust,
	          interactions, otherinteractions, qtprolonging, neo, frequency){
	// Constructing Variables
	this.tradeName = tradeName;
	this.risk = risk;
	this.genName = genName;
	this.classification = classification;
	this.lastRev = lastRev;
	this.monitoring = monitoring;
	this.admin = admin;
	this.preg = preg;
	this.breastfeed = breastfeed;
	this.fertility = fertility;
	this.metabolism = metabolism;
	this.usualoraldose = usualoraldose;
	this.available = available;
	this.excretion = excretion;
	this.contrain = contrain;
	this.specialpop = specialpop;
	this.oncology = oncology;
	this.sideeffects = sideeffects;
	this.doseadjust = doseadjust;
	this.interactions = interactions;
	this.otherinteractions = otherinteractions;
	this.qtprolonging = qtprolonging;
	this.neo = neo;
	this.frequency = frequency;
	
	//Setting functions to object
	this.getTradeName = getTradeName;
	this.getRisk = getRisk;
	this.getGenName = getGenName;
	this.getClassification = getClassification;
	this.getLastRevision = getLastRevision;
	this.getMonitoring = getMonitoring;
	this.getAdmin = getAdmin;
	this.getPreg = getPreg;
	this.getBreastFeed = getBreastFeed;
	this.getFertility = getFertility;
	this.getMetabolism = getMetabolism;
	this.getUsualOralDose = getUsualOralDose;
	this.getAvailable = getAvailable;
	this.getExcretion = getExcretion;
	this.getContrain = getContrain;
	this.getSpecialPop = getSpecialPop;
	this.getSideEffects = getSideEffects;
	this.getOncologyUse =  getOncologyUse;
	this.getDoseAdjust = getDoseAdjust;
	this.getInteract = getInteract;
	this.getOtherInteract = getOtherInteract;
	this.getQtProlonging = getQtProlonging;
	this.getNeo = getNeo;
	this.getFreq = getFreq;
}
		
/**
 * Returns drugs commercial name
 * 
 * @method getTradeName
 * @return {String} Trade name of the drug
 */
function getTradeName() {
	return this.tradeName;
}

/**
 * Return drugs risk level
 * 
 * @method getRisk
 * @return {String} Risk level of the drug
 */
function getRisk() {
	return this.risk;
}

/**
 * Return generic name of the drug
 * 
 * @method getGenName
 * @return {String} Generic name of the drug
 */
function getGenName() {
	return this.genName;
}

/**
 * Returns classification of the drug
 * 
 * @method getClassification
 * @return {String} Drug's classification
 */
function getClassification() {
	return this.classification;
}

/**
 * Returns last revision of the drug
 * 
 * @method getLastRevision
 * @return {String} Drug's last revision
 */
function getLastRevision() {
	return this.lastRev;
}

/**
 * Returns monitoring info of the drug
 * 
 * @method getMonitoring
 * @return {String} Drug's monitoring info
 */
function getMonitoring() {
	return this.monitoring;
}

/**
 * Returns administration info of the drug
 * 
 * @method getAdmin
 * @return {String} Drug's administration information
 */
function getAdmin(){
	return this.admin;
}

/**
 * Returns pregnancy info of the drug
 * 
 * @method getPreg
 * @return {String} Drug's pregnancy info
 */
function getPreg() {
	return this.preg;
}

/**
 * Returns breast feeding info of the drug
 * 
 * @method getBreastFeed
 * @return {String} Drug's breastfeeding info
 */
function getBreastFeed() {
	return this.breastfeed;
}

/**
 * Returns fertility info of the drug
 * 
 * @method getFertility
 * @return {String} Drug's fertility information
 */
function getFertility() {
	return this.fertility;
}

/**
 * Returns metabolism info of the drug
 * 
 * @method getMetabolism
 * @return {String} Drug's metabolism info
 */
function getMetabolism() {
	return this.metabolism;
}

/**
 * Returns usual oral dose info of the drug
 * 
 * @method getUsualOralDose
 * @return {String} Drug's usual oral dose info
 */
function getUsualOralDose() {
	var dose = this.usualoraldose;
	var data = JSON.parse(localStorage.getItem("data"));
	var protocols = data["protocols"];
	var drugName = this.getGenName();
	var subArray = protocols.filter(function (entry) { return entry.drug === drugName;});
	if(subArray.length != 0) {
		var protocol = subArray[0];
		var imagePath = protocol.image;
		var imageName = imagePath.split("/").pop();
        var arrayimagepath = imageName.split(".");
        imageName = arrayimagepath.join("protocol.");
        imageName = localStorage.fileSystemRoot + "/anticData/" + imageName;
		dose = dose + '</br><a href="javascript:void(0)"" onclick=loadProtocolPage(this.name) ' +
			'name="' + imageName + '">Refer to Protocol</a>';
	}
	return dose;
}

/**
 * Returns availability info of the drug
 * 
 * @method getAvailable
 * @return {String} Drug's availability info
 */
function getAvailable() {
	return this.available;
}

/**
 * Returns excretion info of the drug
 * 
 * @method getExcretion
 * @return {String} Drug's excretion info
 */
function getExcretion() {
	return this.excretion;
}

/**
 * Returns contraindication info of the drug
 * 
 * @method getContrain
 * @return {String} Drug's contraindication info
 */
function getContrain() {
	return this.contrain;
}

/**
 * Returns special population info of the drug
 * 
 * @method getSpecialPop
 * @return {String} Drug's special population info
 */
function getSpecialPop(){
	return this.specialpop;
}

/**
 * Returns oncology use info of the drug
 * 
 * @method getOncologyUse
 * @return {String} Drug's oncology use info
 */
function getOncologyUse() {
	return this.oncology;
}

/**
 * Returns side effect info of the drug
 * 
 * @method getSideEffects
 * @return {String} Drug's side effect info
 */
function getSideEffects() {
	return this.sideeffects;
}

/**
 * Returns dose adjust info of the drug
 * 
 * @method getDoseAdjust
 * @return {String} Drug's dose adjust info
 */
function getDoseAdjust() {
	return this.doseadjust;
}

/**
 * Returns interactions info of the drug
 * 
 * @method getInteract
 * @return {String} Drug's interaction info
 */
function getInteract() {
	return this.interactions;
}

/**
 * Returns other interactions info of the drug
 * 
 * @method getOtherInteract
 * @return {String} Drug's other interactions info
 */
function getOtherInteract() {
	return this.otherinteractions;
}

/**
 * Returns qt prolonging info of the drug
 * 
 * @method getQtProlonging
 * @return {String} Drug's qt prolonging info
 */
function getQtProlonging() {
	return this.qtprolonging;
}

/**
 * Returns anti-neoplastic info of the drug
 * 
 * @method getNeo
 * @return {String} Drug's anti-neoplastic info
 */
function getNeo() {
	return this.neo;
}

/**
 * Returns frequency info of the drug
 * 
 * @method getFreq
 * @return {String} Drug's frequecy info
 */
function getFreq() {
	return this.frequency;
}

		