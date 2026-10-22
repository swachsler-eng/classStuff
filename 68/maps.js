
const home = { "lat": 41.13172045025323, "lng": -74.05548775852893 };
const { Map } = await google.maps.importLibrary('maps');
const {  PinElement } = await google.maps.importLibrary("marker");

const [{ InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
    ]);
// Create a new map from the div with id="map".
const map = new Map(document.getElementById('map'), {
    center: home,
    zoom: 17,
    renderingType: 'VECTOR',
    mapTypeId: 'satellite',
    mapId: 'DEMO_MAP_ID',
});
console.log(map);


map.addListener('center_changed', (e) => {
    console.log('center_changed', e);
    console.log(map.getCenter().toJSON());
});
const marker = new AdvancedMarkerElement({
    map,
    position: home,
    title: "Home",
});
const infoWindow = new InfoWindow({
    content: '<h1>Home</h1><p>My Home is a great place to live!</p>',
});

marker.addListener('click', () => {
    infoWindow.open(marker.map, marker);
});
