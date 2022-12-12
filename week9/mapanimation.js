
mapboxgl.accessToken = 'pk.eyJ1Ijoic2RyYXdlIiwiYSI6ImNsYmZsbXB0YTA3ZHgzdmxhYXl4Z2c4N3QifQ.rw99q1mMjaB2nLBBOY1Fmw';
    
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.001499994, 40.717663796],
    zoom: 15
});

//40.717663796 -74.001499994

var marker = new mapboxgl.Marker()
.setLngLat([-73.99810833180193, 40.715445913890704])
.addTo(map);

const stops = [
    //40.71448914266831, -73.99812198773054
    //kongshiktong
    [-73.99810833180193, 40.715445913890704],
    //meilaiwah
    [-73.99798143342753, 40.71561990274003], 
    //columbus park  
    [-74.00004608658598, 40.715566273877855],
    //tiger sugar
    [-73.99814831735739, 40.717198148912985],
    //deluxe food market
    [-73.99617465078403, 40.718134365494365],
    //wahfung
    [-73.99449244626862, 40.717415645415755],
    //golden manna
    [-73.9974379896722, 40.71458903738899],
    //tasty hand-pulled noodles
    [-73.99786193600153, 40.71428784320046],
    //icecream
    [-73.99814748516386, 40.71545207266592],
    //apotheke
    [-73.99812198773054, 40.71448914266831]
];

var counter = 0;
function move(){
    setTimeout(()=>{
    if (counter >= stops.length) return;
    marker.setLngLat(stops[counter]);
    counter++;
    move();
    }, 1000);
}
