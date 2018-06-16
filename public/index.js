
// CREATE THE APP
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
  displayWeather(weather);

}



// CREATE THE MAP

const drawMap = function() {
  const mapDiv = document.getElementById("map");
  const glasgow = [ 55.86515, -4.25763]
  const mainMap = new MapWrapper(mapDiv, glasgow, 15);

  mainMap.addMarker(glasgow);
  londonButton(mainMap);
}

const londonButton = function(map) {
  let londonButton = document.createElement('button');
  londonButton.classList.add('button');
  londonButton.innerText = "Take me to London";
  document.body.appendChild(londonButton);
  londonButton.addEventListener('click', function(){
    map.moveMap([51.509865, -0.118092]);
    console.log(this);
  })
}



const displayWeather = function(weather){
  let weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather');
  let pTag = document.createElement('p');
  pTag.textContent = weather.name;
  weatherInfo.appendChild(pTag);
  document.body.appendChild(weatherInfo);
}

// const locationButton = function(map){
//   let locationButton = document.createElement('button');
//   locationButton.classList.add('button');
//   locationButton.innerText = "Show Current Location";
//   document.body.appendChild(locationButton);
//   locationButton.addEventListener('click', function(){
//   this.map.currentLocation();
//   })
// }





window.addEventListener('load', app);
