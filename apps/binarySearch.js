(function(){
Array.prototype.toTwenty = function(){
	var list = [];
	for(var i = 1; i < 21; i++){
    list.push(i);
  }
  return list;
};

Array.prototype.toForty = function(){
	var list = [];
  for(var i = 1; i < 21; i++){
    list.push(i*2);
  }
  return list;
};

Array.prototype.toOneThousand = function(){
	var list = [];
  for(var i =1; i < 101; i++){
    list.push(i*10);
  }
  return list;
};

Array.prototype.search = function(number){
  index0 = 0;
  indexN = number.length-1;
  var len = number.length;
  var output = {count:0, index:-1, length:len};
  var mid = Math.floor((index0+indexN)/2);
  
  while(index0<=indexN){
    
    if(number[index0]==number){
      output.index=index0;
      return output;
    }
    else if(number[indexN]==number){
      output.index=indexN;
      return output;
    }
    else if(number[mid]==number){
      output.index = mid;
      return output;
    }
    else if(number[mid]<number){
      index0 = mid+1;
      indexN -=1;
    }
    else{
    index0 +=1;
    indexN = mid -1;
      
    }
    output.count ++;
  }
  return output;
};

    module.exports = Array.prototype.toTwenty();
	module.exports = Array.prototype.toForty();
	module.exports = Array.prototype.toOneThousand();
	
})()