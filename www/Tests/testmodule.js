// Runs all test for application
function testModule(){
	var testdrug = new testDrug();
	testdrug.testDrugAttributes();
	testdrug.testDrugAttributes();
	testdrug.testAccessorMethods();
	
	var testmenu = new testMenu();
	testmenu.testSort();
	testmenu.testRiskSort();
	testmenu.testPopulation();
	
	//var testServer = new testServer();
	//testServer.testServerAPI();
	
	var testcypenzyme = new testCypEnzyme();
	testcypenzyme.testAttributes();
	testcypenzyme.testAccessorMethods();
	var testdoseadjustment = new testDoseAdjustment();
	testdoseadjustment.testAttributes();
	var testoncologyuse = new testOncologyUse();
	testoncologyuse.testAttributes();
	testoncologyuse.testAccessorMethods();
	var testprotocol = new testProtocol();
	testprotocol.testAttributes();
	testprotocol.testAccessorMethods();
	var testsideeffect = new testSideEffect();
	testsideeffect.testAttributes();
	testsideeffect.testAccessorMethods();
	var testspecial = new testSpecialPopulation();
	testspecial.testAttributes();
	testspecial.testAccessorMethods();
	var testinteraction = new testInteraction();
	testinteraction.testAttributes();
	testinteraction.testAccessorMethods();
}
