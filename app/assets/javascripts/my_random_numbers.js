$(document).ready(function() {

	var peremennaya;

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


	$('.anton').click(function() {
		$(this).text(peremennaya); 
	});
});