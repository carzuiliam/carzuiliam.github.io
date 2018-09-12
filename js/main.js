// Loads only the first DIV after document loads
$(document).ready(function() {
	$('#content-hello-left').first().removeClass('boxHidden');
	$('#content-hello-left').first().addClass('boxLoaded');
});