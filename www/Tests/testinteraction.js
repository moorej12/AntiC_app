//Test interaction class
function testInteraction(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes() {
		//Creates new interaction class
		var interaction = new Interaction("a","b","c","d");
		
		//Test attributes types
		assert( typeof interaction.subName == "string", "subName type failure");
		assert( typeof interaction.cypName == "string", "cypName type failure");
		assert( typeof interaction.severity == "string", "severity type failure");
		assert( typeof interaction.type == "string", "type type failure");
		
		//Test attributes values
		assert( interaction.subName == "a", "subName value failure");
		assert( interaction.cypName == "b", "cypName value failure");
		assert( interaction.severity == "c", "severity value failure");
		assert( interaction.type == "d", "type value failure");
	}
	function testAccessorMethods() {
		//Creates new interaction class
		var interaction = new Interaction("a","b","c","d");
		
		//Test accessor types
		assert( typeof interaction.getSubName() == "string", "getSubName() type failure");
		assert( typeof interaction.getCyp() == "string", "getCyp() type failure");
		assert( typeof interaction.getSeverity() == "string", "getSeverity() type failure");
		assert( typeof interaction.getType() == "string", "getType() type failure");
		
		//Test accessor values
		assert( interaction.getSubName() == "a", "getSubName() value failure");
		assert( interaction.getCyp() == "b", "getCyp() value failure");
		assert( interaction.getSeverity() == "c", "getSeverity() value failure");
		assert( interaction.getType() == "d", "getType() value failure");
	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}
