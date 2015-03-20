//Tests drug class

function testDrug() {

	this.testDrugAttributes = testDrugAttributes;
	this.testAccessorMethods = testAccessorMethods;

	// Test attributes from Drug class
	function testDrugAttributes() {
		//Create special population Object
		var specialpopulation = new specialPopulation("Pediatrics:", "refer to appropriate");

		//Creates Oncology Use Object
		var oncologyuse = new oncologyUse("(not approved by Health Canada)", "Cutaneous T-cell lymphoma");

		//Create Side Effect Object
		var sideeffect = new sideEffect("Peripheral edema,hypertension,flushoing,Diarrhea", "low");

		//Create Dose Adjustment Object
		var doseadjustment = new doseAdjustments("Dasatinib", "ANC < 0.5");

		var drug = new Drug("Zytiga", "Moderate", "Abiaterone", "Hormonal agent (anti-androgen)", "May 2012", "Disease progression & toxicities (NCI Common Toxicity Criteria) Labs: CBC (diff), BUN, UA, lytes & SeCr.", "Oral: Do not crush or chew tablets.", "Category: D", "Contraindicated", "May cause temporary or permanent sterility", "hepatic", "Adults: 1-5 mg/kg/day", "Tablets: 25mg & 50mg – store at room temperature", "none", "Hypersensitivity to temozolomide or dacarbazine", specialpopulation, oncologyuse, sideeffect, doseadjustment);

		//Test attributes types
		assert( typeof drug.tradeName == "string", "commName type failure");
		assert( typeof drug.risk == "string", "risk type failure");
		assert( typeof drug.genName == "string", "sciName type failure");
		assert( typeof drug.classification == "string", "classification type failure");
		assert( typeof drug.lastRev == "string", "lastRev type failure");
		assert( typeof drug.monitoring == "string", "monitoring type failure");
		assert( typeof drug.admin == "string", "admin type failure");
		assert( typeof drug.preg == "string", "preg type failure");
		assert( typeof drug.breastfeed == "string", "breastfeed type failure");
		assert( typeof drug.fertility == "string", "fertility type failure");
		assert( typeof drug.metabolism == "string", "metabolism type failure");
		assert( typeof drug.usualoraldose == "string", "usualoraldose type failure");
		assert( typeof drug.available == "string", "available type failure");
		assert( typeof drug.excretion == "string", "excretion type failure");
		assert( typeof drug.contrain == "string", "contrain type failure");
		assert( typeof drug.specialpop == "object", "specialPopulation type failure");
		assert( typeof drug.oncology == "object", "oncologyuse type failure");
		assert( typeof drug.sideeffects == "object", "sideffects type failure");
		assert( typeof drug.doseadjust == "object", "doseadjust type failure");

		//Test attributes values
		assert(drug.tradeName == "Zytiga", "commName value failure");
		assert(drug.risk == "Moderate", "risk value failure");
		assert(drug.genName == "Abiaterone", "sciName value failure");
		assert(drug.classification == "Hormonal agent (anti-androgen)", "classification value failure");
		assert(drug.lastRev == "May 2012", "lastRev value failure");
		assert(drug.monitoring == "Disease progression & toxicities (NCI Common Toxicity Criteria) Labs: CBC (diff), BUN, UA, lytes & SeCr.", "monitoring value failure");
		assert(drug.admin == "Oral: Do not crush or chew tablets.","admin value failure");
		assert(drug.preg == "Category: D","preg value failure");
		assert(drug.breastfeed == "Contraindicated","breastfeed value failure");
		assert(drug.fertility == "May cause temporary or permanent sterility","fertility value failure");
		assert(drug.metabolism == "hepatic","metabolism value failure");
		assert(drug.usualoraldose == "Adults: 1-5 mg/kg/day","usaloraldose value failure");
		assert(drug.available == "Tablets: 25mg & 50mg – store at room temperature","available value failure");
		assert(drug.excretion == "none","excretion value failure");
		assert(drug.contrain == "Hypersensitivity to temozolomide or dacarbazine","contrain value failure");
	}
	
	function testAccessorMethods() {
		//Create special population Object
		var specialpopulation = new specialPopulation("Pediatrics:", "refer to appropriate");

		//Creates Oncology Use Object
		var oncologyuse = new oncologyUse("(not approved by Health Canada)", "Cutaneous T-cell lymphoma");

		//Create Side Effect Object
		var sideeffect = new sideEffect("Peripheral edema,hypertension,flushoing,Diarrhea", "low");

		//Create Dose Adjustment Object
		var doseadjustment = new doseAdjustments("Dasatinib", "ANC < 0.5");
		
		//Create Drug Object
		var drug = new Drug("Zytiga", "Moderate", "Abiaterone", "Hormonal agent (anti-androgen)", "May 2012", "Disease progression & toxicities (NCI Common Toxicity Criteria) Labs: CBC (diff), BUN, UA, lytes & SeCr.","Oral: Do not crush or chew tablets.", "Category: D", "Contraindicated", "May cause temporary or permanent sterility", "hepatic", "Adults: 1-5 mg/kg/day", "Tablets: 25mg & 50mg – store at room temperature", "none", "Hypersensitivity to temozolomide or dacarbazine", specialpopulation, oncologyuse, sideeffect, doseadjustment);

		//Tests accessor types
		assert( typeof drug.getTradeName() == "string", "getTradeName type failure");
		assert( typeof drug.getRisk() == "string", "getRisk type failure");
		assert( typeof drug.getGenName() == "string", "getGenName type failure");
		assert( typeof drug.getClassification() == "string", "getClassification type failure");
		assert( typeof drug.getLastRevision() == "string", "getLastRevision type failure");
		assert( typeof drug.getMonitoring() == "string", "getMonitoring() type failure");
		assert( typeof drug.getAdmin() == "string", "getAdmin type failure");
		assert( typeof drug.getPreg() == "string", "getPreg() type failure");
		assert( typeof drug.getBreastFeed() == "string", "getBreastFeed type failure");
		assert( typeof drug.getFertility() == "string", "getFertility() type failure");
		assert( typeof drug.getMetabolism() == "string", "getMetabolism() type failure");
		assert( typeof drug.getUsualOralDose() == "string", "getUsualOralDose type failure");
		assert( typeof drug.getAvailable() == "string", "getAvailable type failure");
		assert( typeof drug.getExcretion() == "string", "getExcretion type failure");
		assert( typeof drug.getContrain() == "string", "getContrain type failure");
		assert( typeof drug.getSpecialPop() == "object", "getSpecialPop type failure");
		assert( typeof drug.getOncologyUse() == "object", "getOncologyUse type failure");
		assert( typeof drug.getSideEffects() == "object", "getSidEffects type failure");
		assert( typeof drug.getDoseAdjust() == "object", "getDoseAdjust type failure");
		
		//Tests accessor values
		assert(drug.getTradeName() == "Zytiga", "getTradeName value failure");
		assert(drug.getRisk() == "Moderate", "getRisk value failure");
		assert(drug.getGenName() == "Abiaterone", "getGenName value failure");
		assert(drug.getClassification() == "Hormonal agent (anti-androgen)", "getClassification value failure");
		assert(drug.getLastRevision() == "May 2012", "getLastRevision value failure");
		assert(drug.getMonitoring() == "Disease progression & toxicities (NCI Common Toxicity Criteria) Labs: CBC (diff), BUN, UA, lytes & SeCr.", "getMonitoring value failure");
		assert(drug.getAdmin() == "Oral: Do not crush or chew tablets.","getAdmin value failure");
		assert(drug.getPreg() == "Category: D","getPreg value failure");
		assert(drug.getBreastFeed() == "Contraindicated","BreastFeed value failure");
		assert(drug.getFertility() == "May cause temporary or permanent sterility","getFertility value failure");
		assert(drug.getMetabolism() == "hepatic","getMetabolism value failure");
		assert(drug.getUsualOralDose() == "Adults: 1-5 mg/kg/day","getUsalOralDose value failure");
		assert(drug.getAvailable() == "Tablets: 25mg & 50mg – store at room temperature","getAvailable value failure");
		assert(drug.getExcretion() == "none","getExcretion value failure");
		assert(drug.getContrain() == "Hypersensitivity to temozolomide or dacarbazine","getContrain value failure");
	}
}

// Assert function to test class
function assert(condition, message) {
	if (!condition) {
		alert(message || "Assertion failed");
	}
}
