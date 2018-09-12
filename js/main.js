// Loads the first DIV when the document loads
$(document).ready(function() {
	$('#info').first().removeClass('hide');
	$('#info').first().addClass('show');
});