// Tests listview main menu that lists all drugs

function testMenu(){
	
	this.testSort = testSort;
	this.testRiskSort = testRiskSort;
	this.testPopulation = testPopulation;
	
	//Function that test sorting function
	function testSort(){
		
		//Create test objects
		person=new Object();
		person.firstname="John";
		person.lastname="Doe";
		person.age=50;
		person.eyecolor="blue";
		
		person2=new Object();
		person2.firstname="Sarah";
		person2.lastname="Blah";
		person2.age=60;
		person2.eyecolor="red";	
		
		person3=new Object();
		person3.firstname="Joe";
		person3.lastname="Black";
		person3.age=70;
		person3.eyecolor="green";
		
		//Create test array
		var testArray = new Array(person,person2,person3);
		testArray = sort(testArray,"firstname");
		
		//Test sort function with firstname parameter
		assert(testArray[0].firstname == "Joe" &&  testArray[2].firstname == "Sarah","Sort function firstname parameter failed");
		
		// Test sort function with lastname parameter
		testArray = sort(testArray,"lastname");
		assert(testArray[0].lastname == "Black" &&  testArray[2].lastname == "Doe","Sort function lastname parameter failed");
		
		// Test sort function with eyecolor parameter
		testArray = sort(testArray,"eyecolor");
		assert(testArray[0].eyecolor == "blue" &&  testArray[2].eyecolor == "red","Sort function lastname parameter failed");
					
	}
	function testRiskSort(){
		//Creating drugs
		var drug = new Drug("Z","High","T","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug1 = new Drug("P","Low","R","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug2 = new Drug("W","High","X","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug3 = new Drug("A","Moderate","B","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug4 = new Drug("C","Low","Z","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		// Creating a drug array
		var drugArray = new Array();
		drugArray[0] = drug;
		drugArray[1] = drug1;
		drugArray[2] = drug2;
		drugArray[3] = drug3;
		drugArray[4] = drug4;
		
		//Sorting by risk, trade name, and whether is not reversed
		drugArray = riskSort(drugArray,'tradeName',true);
		
		// Checking by risk, trade name, and whether is not reversed
		assert(drugArray[0].getTradeName() == 'C',"RiskSort Error1");
		assert(drugArray[1].getTradeName() == 'P',"RiskSort Error2");
		assert(drugArray[2].getTradeName() == 'A',"RiskSort Error3");
		assert(drugArray[3].getTradeName() == 'W',"RiskSort Error4");
		assert(drugArray[4].getTradeName() == 'Z',"RiskSort Error5");
		
		//Sorting by risk, generic name, and whether is not reversed
		drugArray = riskSort(drugArray,'genName',true);
		
		// Checking by risk, generic name, and whether is reversed
		assert(drugArray[0].getGenName() == 'R',"RiskSort Error6");
		assert(drugArray[1].getGenName() == 'Z',"RiskSort Error7");
		assert(drugArray[2].getGenName() == 'B',"RiskSort Error8");
		assert(drugArray[3].getGenName() == 'T',"RiskSort Error9");
		assert(drugArray[4].getGenName() == 'X',"RiskSort Error10");
	}
	// Test similar population method to one used onPage for menu	
	function testPopulation(){
		
		//Creating drugs
		var drug = new Drug("Z","High","T","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug1 = new Drug("P","Low","R","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug2 = new Drug("W","High","X","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug3 = new Drug("A","Moderate","B","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		var drug4 = new Drug("C","Low","Z","Classification: Drug","2014-04-04","Monitor Well","Pill Form","Category X","No Recommended","Decreases","Slowed",
		"100mg","Iceland","No Effect","Yes","Elderly: Don't use","Yes","Colour-Blindness","None");
		
		// Creating a drug array
		var drugArray = new Array();
		drugArray[0] = drug;
		drugArray[1] = drug1;
		drugArray[2] = drug2;
		drugArray[3] = drug3;
		drugArray[4] = drug4;
		
		var isTradeName =true;
		var count = 0;
		//Populating menuList (Listview)
				$.each(drugArray, function( index, value ) {
			if(isTradeName == false){
				//Populating MenuList(Listview) 
	  			$('#menuList').append('<li data-iconpos="right"><a href="javascript:void(0)" id="' + index + '" onclick=loadDrugPage(this.id)>' 
	  			+ drugArray[index].getGenName() + " (" + drugArray[index].getTradeName()+ ")" +'</a></li>').listview('refresh');
	  			count++;
  			}
  			else{
  				//Populating MenuList(Listview)
	  			$('#menuList').append('<li data-iconpos="right"><a href="javascript:void(0)" id="' + index + '" onclick=loadDrugPage(this.id)>' 
	  			+ drugArray[index].getTradeName()+ " (" + drugArray[index].getGenName()+ ")" + '</a></li>').listview('refresh');	
	  			count++;
  			}
  			// Change Icon based on level of risk 
  			$('#menuList li:last-child').buttonMarkup({ icon:drugArray[index].getRisk().toLowerCase()});
		});	
		// Check that menuList populated
		assert(count == 5,"MenuList Population error");
	}	
}
// Assert function to test class		
function assert(condition, message) {
    if (!condition) {
        alert(message || "Assertion failed");
    }
}



