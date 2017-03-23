/*
  API_URL: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=088280b2c466880950a7a3d7c3f1fd71
  APPID: 088280b2c466880950a7a3d7c3f1fd71
  Where: lat = latitude and lon = longitutue
*/

var JSONresponse,
    kelvin,
    celcius = true,
    weatherConditions = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Extreme', 'Additional'],
    tempConverter = document.getElementById('temperature'),
    temperature = document.getElementById('temperature');

tempConverter.addEventListener('click', function(){

  if(celcius){
    temperature.innerHTML = kelvinToFahrenhiet(kelvin) + ' F'; 
  } else {
    temperature.innerHTML = kelvinToCelcius(kelvin) + ' C';
  }
});

function kelvinToFahrenhiet(k){
  celcius = false;
  var feh = (k * 1.8) - 459.67;
  feh = Math.round(feh);
  return feh;
}

function kelvinToCelcius(k){
  celcius = true;
  var cel = k - 273;
  cel = Math.round(cel);
  return cel;
}

function findLocation() {

  if (!navigator.geolocation){
    window.alert("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    getWeatherInfo(latitude, longitude);
  };

  function error() {
    window.alert("Unable to retrieve your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);
}

function getWeatherInfo(lat, lon){
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=",
      lat = lat;
      lon = lon;
      appid = "088280b2c466880950a7a3d7c3f1fd71";
      API_URL = url + lat + '&lon=' + lon + '&appid=' + appid,
      request = sendRequest();
}

//sending request to get data from weatherAPI
function sendRequest() {
  var httpReq = new XMLHttpRequest();

  httpReq.onreadystatechange = function retrieveContents(){
    if (httpReq.readyState === 4) {
      if (httpReq.status === 200) {
        JSONresponse = JSON.parse(httpReq.response);
        renderResult(JSONresponse);
      }
    }
  };

  httpReq.open('GET', API_URL, true);
  httpReq.send();
}

function renderResult(data){
  var location = document.getElementById('location');
  location.innerHTML = data.name + ', ' + data.sys.country;
  kelvin = data.main.temp;
  temperature.innerHTML = kelvinToCelcius(kelvin) + ' C';
  checkWeatherConditions(data);
}

function checkWeatherConditions(data){
  weatherConditions.forEach(function(val){
    var condition = data.weather[0].main;
    var weatherCon;

    if (val === condition) {
      if ( (val === 'Atmosphere') || (val === 'Additional') ) {
        weatherCon = document.getElementsByClassName('Clear');
        weatherCon[0].style.display = 'block';
      } else if (val === 'Extreme') {
        weatherCon = document.getElementsByClassName('Thunderstorm');
        weatherCon[0].style.display = 'block';
      } else {
        weatherCon = document.getElementsByClassName(val);
        weatherCon[0].style.display = 'block';
      }
    }
  });
}

findLocation();