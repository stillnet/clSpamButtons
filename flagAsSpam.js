flagAsSpam = function(element,ad_url) {
	$(element).css('text-decoration','line-through');
	$('h4.ban').after('<iframe id="clsb_frame" style="display:none;" src="JavaScript:"></iframe>')
	$('#clsb_frame').load( window.top.waitForSpamLink())
	$('#clsb_frame').attr('src', ad_url )
	}

waitForSpamLink = function() {
	console.log('checking for spam link....')

	// wait for the content
	var spamLink = $('#clsb_frame').contents().find('a[data-flag=15]');

	if (spamLink.length == 0) {
		setTimeout(waitForSpamLink,500);
		console.log('waiting 500 more milliseconds for spamlink to appear');
		}
	else {
		console.log('its here now!');
		spamLink.get()[0].click();
	}


}

