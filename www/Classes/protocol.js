// Create protocol object

//*****************
//Variables: 
// Protocol's Name - name
// Protocol's Number of cycle -numofcycles
// Protocol's Use - use
// Protocol's Dose - dose
// Protocol's Variation - variation
// Protocol's Days of Cycle - dayofcycle
// Protocol's Days per cycle - daypercycle
//*****************

function Protocol(name,numofcycles,use,dose,variation,dayofcycle,daypercycle){
	// Constructing Variables
	this.name = name;
	this.numofcycles = numofcycles;
	this.use = use;
	this.dose = dose;
	this.variation = variation;
	this.dayofcycle = dayofcycle;
	this.daypercycle = daypercycle;
	
	//Setting functions to object
	this.getName = getName;
	this.getNumOfCycle = getNumOfCycle;
	this.getUse = getUse;
	this.getDose = getDose;
	this.getVariation = getVariation;
	this.getDayOfCycle = getDayOfCycle;
	this.getDayPerCycle = getDayPerCycle;
}
//Returns protocol's name
function getName(){
	return this.name;
}
//Returns protocol's number of cycles
function getNumOfCycle(){
	return this.numofcycles;
}
//Returns protocol's use
function getUse(){
	return this.use;
}
//Returns protocol's dose
function getDose(){
	return this.dose;
}
//Returns protocol's variation
function getVariation(){
	return this.variation;
}
//Returns protocol's days of cycle
function getDayOfCycle(){
	return this.dayofcycle;
}
//Return protocol's days per cycle
function getDayPerCycle(){
	return this.daypercycle;
}
