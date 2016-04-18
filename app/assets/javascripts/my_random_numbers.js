$(document).ready(function() {

	var peremennaya;
	var i = 0; 


	$('.create-random-array').click(function() {
		var n = $('#random-words-number').val();
		$.ajax({
			url: '/words/random.json?' + 'n=' + n,
			type: 'GET',
			success: function(data){ 
				console.log(data); 
				$('#random-numbers-list').text(data);
				peremennaya = data;
			}
		});		
	});


	$('#show-next-word').click(function() {
		if ( i < peremennaya.length ) 
			{
				$("#words-list").append("<li>" + peremennaya[i] + "</li>");
				i += 1;
			}
			else
		        { alert( "Показаны все слова" ); }
	});
});


