/*
API information
	search string: search string
	api url: https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=programming
*/

var API_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
var data,
	searchBox = document.getElementById('searchBox'),
	form = document.getElementById('form'),
	searchBtn = document.getElementById('search-btn');

form.addEventListener('submit', sendRequest);
searchBtn.addEventListener('click', sendRequest);

// send request to get search result
function sendRequest() {
	var searchString = searchBox.value;
	var url = API_URL + searchString;
	jsonp(url, extractData);
	return false;
}

// sending request to wikipedia
function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

// extract data which we get from wikipedia
var extractData = function(data){
	var obj = {
			title: [],
			url: [],
			disc: []
		},
		count = data[1].length;
	for(var i=0; i<count; i++){
		obj.title[i] = data[1][i];
		obj.disc[i] = data[2][i];
		obj.url[i] = data[3][i];
	}
	renderSearchResult(obj);
}

// render search result
function renderSearchResult(data){
	var main = document.getElementById('main');
	main.innerHTML = '';
	console.log(data);
	var classes = ['search-qr-title', 'search-qr-link', 'search-qr-disc'];

	for(var i=0; i<data.title.length; i++){
		var arr = [data.title[i], data.url[i], data.disc[i]];
		var ul = document.createElement('ul');
		main.appendChild(ul);
		ul.className = 'search-query list-unstyled';
		// now 3 list items
		classes.forEach(function(val, index){
			var li = document.createElement('li');
			li.className = val;
			ul.appendChild(li);
			if (index === 0) {
				var anchor = document.createElement('a');
				anchor.setAttribute('href', arr[index+1]);
				li.appendChild(anchor);
				var heading = document.createElement('h4');
				anchor.appendChild(heading);
				heading.innerHTML = arr[index];
			} else {
				li.innerHTML = arr[index];
			}
		});
	}
}