const app = function(){


}

const drawMap = function() {
  const mapDiv = document.getElementById("map");
  const mainMap = new MapWrapper(mapDiv);
}

window.addEventListener('load', drawMap);
