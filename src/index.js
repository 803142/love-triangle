module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
  let loveAdress1=0;
  let loveAdress2=0;
  let loveAdress3=0;

  if (preferences.length>=3){
    for (i=0; i<=preferences.length-3; i++)  {
  		loveAdress1=preferences[i]-1;
  		loveAdress2=preferences[loveAdress1]-1;
  		loveAdress3=preferences[loveAdress2]-1;
  		if ((loveAdress3 == i) && (loveAdress2>i) && (loveAdress1>i)){
        count++;
  	  };
	  };
  };

  return count;
};