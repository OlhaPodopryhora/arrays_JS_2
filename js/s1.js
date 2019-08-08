(function(){
	'use strict';


	function map(fn, array){
		document.write('Жил был один массив, и звали его array: ' + array);
		document.write('<br>'+ '<br>');
		
		var newArray = [];
			for(var i=0; i<array.length; ++i){
				newArray.push(square(array[i]))
			}		
		return newArray;
	}

	function square(x) { 
		return x * x; 
	} 
	document.write('Но жизнь помножила его на себя,' + '<br>'+
					'и теперь он стал совершенно другим массивом, а зовут его newArray: ' 
					+ map(square, [6,4,9,12,44,3]));


	document.write('<br>' + '<br>' + 'Who are you? I\'m you but stronger');

})();