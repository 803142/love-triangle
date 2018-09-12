/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  count=0;
  lnth=preferences.length;
  //triangle can be only with three person
  if (lnth>=3){
  for (i=0;i<=lnth-3;i++)  {
  		a=preferences[i]-1;
  		b=preferences[a]-1;
  		c=preferences[b]-1;
  		//exclude repetitions in calculations
  		if ((c == i) && (b>i) && (a>i)){count=count+1;
  	 	};
	};

  };

  return count;
  };
	
