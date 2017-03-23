/*
API credentials for authentication
	User ID: 4196
	Token: n6REAQtv7dpoOYAw
	Web Admin Password: ZcB3fZbx
	api url: http://www.stands4.com/services/v2/quotes.php?uid=4196&tokenid=n6REAQtv7dpoOYAw&searchtype=AUTHOR&query=Albert+Einstein
*/

var API_URL = 'http://www.stands4.com/services/v2/quotes.php?uid=4196&tokenid=n6REAQtv7dpoOYAw&searchtype=RANDOM';
var quoteDoc,
	httpReq,
	blockquote = document.getElementById('quote'),
	author = document.getElementById('author'),
	quote = '',
	quoteAuthor = '';

// send request to get quote
function sendRequest() {
	httpReq = new XMLHttpRequest();
	httpReq.onreadystatechange = retrieveContents;
	httpReq.open('GET', API_URL, true);
	httpReq.send();
}

//retrieve data from request
function retrieveContents(){
	if (httpReq.readyState === 4) {
		if (httpReq.status === 200) {
			quoteDoc = httpReq.responseXML;
			updateQuote();
		}
	}
}

// update quote
function updateQuote(){
	if (quoteDoc.getElementsByTagName('error')[0].innerHTML === 'Daily Usage Exceeded') {
		blockquote.innerHTML = quoteDoc.getElementsByTagName('error')[0].innerHTML;
	} else {
		quote = quoteDoc.getElementsByTagName('quote')[0].innerHTML;
		quoteAuthor = quoteDoc.getElementsByTagName('author')[0].innerHTML;
		blockquote.innerHTML = quote;
		author.innerHTML = quoteAuthor;
	}
}

sendRequest();

// tweet the quote
function tweet(){
	var url = 'https://twitter.com/intent/tweet?text=' + '"' + quote + '", ' + quoteAuthor + '&hashtags=quotes';
	window.open(url);
}