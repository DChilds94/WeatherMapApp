// CREATE THE MAP

const drawMap = function() {
  const mapDiv = document.getElementById("map");
  const glasgow = [ 55.86515, -4.25763]
  // const zoom = 15
  const mainMap = new MapWrapper(mapDiv, glasgow, 15);
  mainMap.addMarker(glasgow);
}




const app = function(){
  drawMap();
  let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ec48c9ac25974ff3592099ccf76d18db";
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callBack){
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callBack)
  request.send();
}

const requestComplete = function(){
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  const weather = JSON.parse(jsonString);
  console.log(weather)
  displayWeather(weather);
}

const displayWeather = function(weather){
  let weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather');
  let pTag = document.createElement('p');
  pTag.textContent = weather.name;
  weatherInfo.appendChild(pTag);
  document.body.appendChild(weatherInfo);
}



window.addEventListener('load', app);
