$(document).ready(function() {

	var randomWordsArray;
	var i = 0; 
	
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
		        { alert( "Показаны все слова" ); }
	});


	$('#show-random-number').click(function() {
		i = getRandomInt(randomWordsArray);
		$('#random-num').text(i);
		console.log(i); 
	});

});
















