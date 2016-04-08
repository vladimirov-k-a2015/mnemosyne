$(document).ready(function() {
	$('.create-random-array').click(function() {
		if (confirm("Создать массив случайных чисел")) {
			var n = $('#random-words-number').val();
			$.ajax({
				url: '/words/random.json?' + 'n=' + n,
				type: 'GET',
				success: function(data){ 
					console.log(data); 
					$('#random-numbers-list').text(data); 
				}
			});
		};
	});
});