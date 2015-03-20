/** 
 * Provides utility functions to be used throughout the application, 
 * including sorting and object length helper functions
 * 
 * @class util
 */

/**
 * Sorts the array of objects based on an input parameter of the object
 * 
 * @method sort
 * @param {Object} List of objects to sort
 * @param {String} Attribute of the object to sort by
 * @return {Object} List of objects sorted by the attribute
 */
function sort(tempArray,c) {
	tempArray.sort(function(a, b) {
 			var nameA=a[c], nameB=b[c];
 			if (nameA < nameB) { //sort string ascending
  				return -1;
  			}
 			if (nameA > nameB) {
 				return 1;
 			}
 			return 0; //default return value (no sorting)
		});
	return tempArray;
}

/**
 * Sorts the array of objects based on the risk level of the drug
 * 
 * @method riskSort
 * @param {Object} List of objects to sort
 * @param {String} Attribute of the object to sort by
 * @param {Boolean} Whether or not the list should be reversed 
 * @return {Object} List of objects sorted by the attribute
 */
function riskSort(drugArray, c, notReversed) {
	drugArray = sort(drugArray,c);
	weakArray = new Array();
	moderateArray = new Array();
	severeArray = new Array();
	for (var i=0; i < drugArray.length; i++) {
		if(drugArray[i].getRisk().toLowerCase() == "high") {
			severeArray.push(drugArray[i]);
		}
		if (drugArray[i].getRisk().toLowerCase() == "moderate") {
			moderateArray.push(drugArray[i]);
		}
		if (drugArray[i].getRisk().toLowerCase() == "low") {
			weakArray.push(drugArray[i]);
		}
	}
	drugArray = new Array();
	var j = 0;
	for (var i=0; i < weakArray.length; i++) {
		drugArray[j] = weakArray[i];
		j++;
	}
	for (var i=0; i < moderateArray.length; i++) {
		drugArray[j] = moderateArray[i];
		j++;
	}
	for (var i=0; i < severeArray.length; i++) {
		drugArray[j] = severeArray[i];
		j++;
	}
	if (notReversed == true) {
		return drugArray;
	} else {
		return drugArray.reverse();
	}
}

/**
 * Simple quicksort algorithm for sorting an array of objects
 * 
 * @method quicksort
 * @param {Object} List of objects to sort
 * @return {Object} List of objects quicksorted by the attribute
 */
function quicksort(arr) {
	if (arr.length == 0)
		return [];

	var left = new Array();
	var right = new Array();
	var pivot = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quicksort(left).concat(pivot, quicksort(right));
}

/**
 * Returns the length of the list of objects
 * 
 * @method objLength
 * @param {Object} List of objects
 * @return {Integer} Length of list of objects
 */
function objLength(obj) {
	var i=0;
	for (var x in obj) {
		if (obj.hasOwnProperty(x)) {
			i++;
		}
	} 
	return i;
}