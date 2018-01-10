/**
Naam: Daphne Witmer
Studentnummer: 10588094
Initialize page and set scales, ranges and dimensions
**/

window.onload = function() {

    // queue data
    d3.queue()
        .defer(d3.json, "data/json/world-countries.json")
        .defer(d3.json, "data/json/DALY-2000.json")
        .defer(d3.json, "data/json/DALY-2005.json")
        .defer(d3.json, "data/json/DALY-2010.json")
        .defer(d3.json, "data/json/DALY-2015.json")
        .await(loadData);
}
