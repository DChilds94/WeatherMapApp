const app = function(){


}

const drawMap = function() {
  const mapDiv = document.getElementById("map");
  const glasgow = [ 55.86515, -4.25763]
  // const zoom = 15
  const mainMap = new MapWrapper(mapDiv, glasgow, 15);
  mainMap.addMarker(glasgow);
}

window.addEventListener('load', drawMap);
