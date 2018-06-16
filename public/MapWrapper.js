const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
  this.map.on("click", function(event){
    this.addMarker(event.latlng)
  }.bind(this))
}

MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.moveMap = function (coords){
  this.map.flyTo(coords);
}

MapWrapper.prototype.currentLocation = function () {
  this.map.locate({
    setView: true
  })

};

// MapWrapper.prototype.addInfoPanel = function (coords) {
//   ths
//
// };
