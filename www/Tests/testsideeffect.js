// Tests side effects class
function testSideEffect(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  sideeffect = new sideEffect("Peripheral edema,hypertension,flushoing,Diarrhea","low");
		
		//Test attributes types
		assert(typeof sideeffect.name == "string","name type failure");
		assert(typeof sideeffect.severity == "string","severity type failure");
		
		//Test attributes values
		assert(sideeffect.name == "Peripheral edema,hypertension,flushoing,Diarrhea","name value failure");
		assert(sideeffect.severity == "low","severity value failure");
	}
		
	function testAccessorMethods(){
		var  sideeffect = new sideEffect("Peripheral edema,hypertension,flushoing,Diarrhea","low");
		
		//Tests accessor types
		assert(typeof sideeffect.getName() == "string","getName type failure");
		assert(typeof sideeffect.getSeverity() == "string","getSeverity type failure");
		
		//Tests accessor values
		assert(sideeffect.getName() == "Peripheral edema,hypertension,flushoing,Diarrhea","getName value failure");
		assert(sideeffect.getSeverity() == "low","getSeverity value failure");

	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}