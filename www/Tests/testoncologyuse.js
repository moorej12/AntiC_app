// Tests oncology use class

function testOncologyUse(){
	
	this.testAttributes = testAttributes;
	this.testAccessorMethods = testAccessorMethods;
	
	function testAttributes(){
		
		var  oncologyuse = new oncologyUse("(not approved by Health Canada)","Cutaneous T-cell lymphoma");
		
		//Test attributes types
		assert(typeof oncologyuse.approved == "string","approved type failure");
		assert(typeof oncologyuse.cancerType == "string","cancerType type failure");
		
		//Test attributes values
		assert(oncologyuse.approved == "(not approved by Health Canada)","approved value failure");
		assert(oncologyuse.cancerType == "Cutaneous T-cell lymphoma","cancerType value failure");
	}
	function testAccessorMethods(){
		var  oncologyuse = new oncologyUse("(not approved by Health Canada)","Cutaneous T-cell lymphoma");
		
		//Tests accessor types
		assert(typeof oncologyuse.getApproved() == "string","getApproved type failure");
		assert(typeof oncologyuse.getCancerType() == "string","getCancerType type failure");
		
		//Tests accessor values
		assert(oncologyuse.getApproved() == "(not approved by Health Canada)","getApproved accessor value failure");
		assert(oncologyuse.getCancerType() == "Cutaneous T-cell lymphoma","getCancerType accessor value failure");

	}
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}