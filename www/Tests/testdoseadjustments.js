// Tests dose adjustment class

function testDoseAdjustment(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  doseadjustment = new doseAdjustments("Dasatinib", "ANC < 0.5");
		
		//Test attributes types
		assert(typeof doseadjustment.condition == "string","condition type failure");
		assert(typeof doseadjustment.note == "string","note type failure");
		
		//Test attributes values
		assert(doseadjustment.condition == "Dasatinib","condition value failure");
		assert(doseadjustment.note == "ANC < 0.5","note value failure");

	}
	function testAccessorMethods(){
		
		var  doseadjustment = new doseAdjustments("Dasatinib", "ANC < 0.5");
		
		//Test attributes types
		assert(typeof doseadjustment.getCondition() == "string","getCondition type failure");
		assert(typeof doseadjustment.getNote() == "string","getNote type failure");
		
		//Test attributes values
		assert(doseadjustment.getCondition() == "Dasatinib","getCondition value failure");
		assert(doseadjustment.getNote() == "ANC < 0.5","getNote value failure");

	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}