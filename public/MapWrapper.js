const MapWrapper = function(element){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  this.map = L.map(element).addLayer(osmLayer).setView([0, 0], 15);

}
