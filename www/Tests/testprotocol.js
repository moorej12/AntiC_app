// Tests protocol class

function testProtocol(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  protocol = new Protocol("Bevicizumab Capecitabine","up to 35","Breast","1000mg/m2bid","1","1-14","21");
		
		//Test attributes types
		assert(typeof protocol.name == "string","name type failure");
		assert(typeof protocol.numofcycles == "string","numofcycles type failure");
		assert(typeof protocol.use == "string","use type failure");
		assert(typeof protocol.dose == "string","dose type failure");
		assert(typeof protocol.variation == "string","variation type failure");
		assert(typeof protocol.dayofcycle == "string","dayofcycle type failure");
		assert(typeof protocol.daypercycle == "string","daypercycle type failure");
		
		//Test attributes values
		assert(protocol.name == "Bevicizumab Capecitabine","name value failure");
		assert(protocol.numofcycles == "up to 35","numofcycles value failure");
		assert(protocol.use == "Breast","use value failure");
		assert(protocol.dose == "1000mg/m2bid","dose value failure");
		assert(protocol.variation == "1","variation value failure");
		assert(protocol.dayofcycle == "1-14","dayofcycle value failure");
		assert(protocol.daypercycle == "21","daypercycle value failure");
	}
		
	function testAccessorMethods(){
		var  protocol = new Protocol("Bevicizumab Capecitabine","up to 35","Breast","1000mg/m2bid","1","1-14","21");
		
		//Tests accessor types
		assert(typeof protocol.getName() == "string","getName type failure");
		assert(typeof protocol.getNumOfCycle() == "string","getNumOfCycles type failure");
		assert(typeof protocol.getUse() == "string","getUse type failure");
		assert(typeof protocol.getDose() == "string","getDose type failure");
		assert(typeof protocol.getVariation() == "string","getVariation type failure");
		assert(typeof protocol.getDayOfCycle() == "string","getDayOfCycle type failure");
		assert(typeof protocol.getDayPerCycle() == "string","getDaysPerCycle type failure");
		
		//Tests accessor values
		assert(protocol.getName() == "Bevicizumab Capecitabine","getName value failure");
		assert(protocol.getNumOfCycle() == "up to 35","getNumOfCycles value failure");
		assert(protocol.getUse() == "Breast","getUse value failure");
		assert(protocol.getDose() == "1000mg/m2bid","getDose value failure");
		assert(protocol.getVariation() == "1","getVariation value failure");
		assert(protocol.getDayOfCycle() == "1-14","getDayOfCycle value failure");
		assert(protocol.getDayPerCycle() == "21","getDaysPerCycle value failure");
	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}