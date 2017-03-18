function covertToStarsArray(stars){


   var num = stars.toString().substring(0,1);

   var array = [];

   for(var i = 1; i <= 5; i++){

	   if(i <= num){

		   array.push(1);

	   }else {

		   array.push(0);

	   }

   }

	return array;

}

module.exports = {

    convertToStarsArray: convertToStarsArray,

};