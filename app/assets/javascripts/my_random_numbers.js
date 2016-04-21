$(document).ready(function() {

	var randomWordsArray;
	var i = 0; 
	var randomNum; 
	
    function getRandomInt(itemsArray){
        return Math.floor(Math.random() * itemsArray.length);
    }


	$('.create-random-array').click(function() {
		var n = $('#random-words-number').val();
		$.ajax({
			url: '/words/random.json?' + 'n=' + n,
			type: 'GET',
			success: function(data){ 
				console.log(data); 
				$('#random-numbers-list').text(data);
				randomWordsArray = data;
			}
		});		
	});


	$('#show-next-word').click(function() {
		if ( i < randomWordsArray.length ) 
			{
				$("#words-list").append("<li>" + randomWordsArray[i] + "</li>");
				i += 1;
			}
			else
		        { alert( "Показаны все слова" );
		    	  i = 0;
		    	  $("#words-list").text("");
		         }
	});


	$('#show-one-word').click(function() {
		if ( i < randomWordsArray.length ) 
			{
				$("#one-word").text(randomWordsArray[i]);
				i += 1;
			}
			else
		        { alert( "Показаны все слова." );
		    	  i = 0;
		    	  $("#one-word").text("");
		         }
	});


	$('#show-random-number').click(function() {
		randomNum = getRandomInt(randomWordsArray);
		$('#random-num').text(randomNum + 1);
		console.log(randomNum); 
	});

});
















