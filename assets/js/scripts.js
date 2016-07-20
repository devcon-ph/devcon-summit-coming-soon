$(document).ready(function () {

	$('.button').click(function(){
	  var buttonId = $(this).attr('id');
	  $('#modal-container').removeAttr('class').addClass(buttonId);
	  $('body').addClass('modal-active');
	})

	$('#modal-container, #close').click(function(){
	  $('#modal-container').addClass('out');
	  $('body').removeClass('modal-active');
	});	

});