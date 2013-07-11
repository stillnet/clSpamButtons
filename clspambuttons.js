var s = document.createElement('script');
s.src = chrome.extension.getURL("flagAsSpam.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

//$('span.pl a').css('background-color','#FF0000')

//$('#clsb_frame').load( window.top.clickSpamLink())

$('span.pl a').each( function(index,element) {
	//console.log(element);
	var ad_url = $(element).attr('href')
	$(element).before('<a href="JavaScript:;" onclick="flagAsSpam(this, \'' + ad_url + '\')">[spam]</a> ')
	//var ad_url = $(element).attr('href')
	//$('#clsb_frame').attr('src', ad_url )
	})




