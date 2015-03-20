// Tests special population class
function testSpecialPopulation(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  specialpopulation = new specialPopulation("Pediatrics:","refer to appropriate");
		
		//Test attributes types
		assert(typeof specialpopulation.name == "string","name type failure");
		assert(typeof specialpopulation.note == "string","note type failure");
		
		//Test attributes values
		assert(specialpopulation.name == "Pediatrics:","name value failure");
		assert(specialpopulation.note == "refer to appropriate","note value failure");
	}
		
	function testAccessorMethods(){
		var  specialpopulation = new specialPopulation("Pediatrics:","refer to appropriate");
		
		//Tests accessor types
		assert(typeof specialpopulation.getName() == "string","getName type failure");
		assert(typeof specialpopulation.getNote() == "string","getNote type failure");
		
		//Tests accessor values
		assert(specialpopulation.getName() == "Pediatrics:","getName value failure");
		assert(specialpopulation.getNote() == "refer to appropriate","getNote value failure");

	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}