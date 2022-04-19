$(document).ready(function(){


	$('input[type=range]').on('input', function(){

		let inputType = $(this).attr('id');
		let inputValue = $(this).val();

		 if (inputType == 'wght'){
		 	$('#font').css('--wght-axis', inputValue);
		 }

	});

	$('#play').click(function(){
		$('#font').toggleClass('animated');
	});

});