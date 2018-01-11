/**
Naam: Daphne Witmer
Studentnummer: 10588094
Initialize page and set scales, ranges and dimensions
**/

var width;
var height;
var margin;

window.onload = function() {

    margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 850 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // queue data
    d3.queue()
        .defer(d3.json, "data/json/world-countries.json")
        .defer(d3.json, "data/json/DALY-2000.json")
        .defer(d3.json, "data/json/DALY-2005.json")
        .defer(d3.json, "data/json/DALY-2010.json")
        .defer(d3.json, "data/json/DALY-2015.json")
        .await(loadData);
}
