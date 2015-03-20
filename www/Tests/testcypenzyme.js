// Tests Cyp Enzyme class

function testCypEnzyme(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  cypenzyme = new cypEnzyme("Acetaminophen");
		
		//Test attributes types
		assert(typeof cypenzyme.name == "string","name type failure");
		
		//Test attributes values
		assert(cypenzyme.name == "Acetaminophen","name value failure");

	}
	function testAccessorMethods(){
		var  cypenzyme = new cypEnzyme("Acetaminophen");
		
		//Tests accessor types
		assert(typeof cypenzyme.getName() == "string","getName accessor type failure");
		
		//Tests accessor values
		assert(cypenzyme.getName() == "Acetaminophen","getName accessor value failure");
	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}