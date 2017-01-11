'use strict'
module.exports = {

findMissing: function(arr1, arr2){
	var arr3 = [];
	/*if((arr1.length === arr2.length) || arr1.length === arr2.length === 0){
		return 0;
	}
	else{*/
		arr1.forEach(function(val){
			if(arr2.indexOf(val) < 0) arr3.push(val);
		});
		arr2.forEach(function(val){
			if(arr1.indexOf(val) < 0) arr3.push(val);
		});
		var diff = arr3.pop();
		return diff;
	//}
}
}
 