/**
Naam: Daphne Witmer
Studentnummer: 10588094
Function to load data
map: https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
data: http://www.who.int/healthinfo/global_burden_disease/estimates/en/index2.html
**/

window.onload = function() {

    // queue data
    d3.queue()
        .defer(d3.json, "data/json/custom.geo.json")
        .defer(d3.json, "data/json/DALY-2000.json")
        .defer(d3.json, "data/json/DALY-2005.json")
        .defer(d3.json, "data/json/DALY-2010.json")
        .defer(d3.json, "data/json/DALY-2015.json")
        .await(loadData);
}


function loadData(error, mapData, data2000, data2005, data2010, data2015) {
    if (error) throw error;

    var DALYdata = {
        2000: data2000,
        2005: data2005,
        2010: data2010,
        2015: data2015
    };

    for (var year in DALYdata) {
        if (DALYdata.hasOwnProperty(year)) {
            var data = DALYdata[year];
            data.forEach(function(d) {
                d.population = +d.population;
                d.all = +d.all;
                d.depressive = +d.depressive;
                d.bipolar = +d.bipolar;
                d.schizophrenia = +d.schizophrenia;
                d.alcoholUse = +d.alcoholUse;
                d.drugUse = +d.drugUse;
                d.anxiety = +d.anxiety;
                d.eating = +d.eating;
                d.autism = +d.autism;
                d.adhd = +d.adhd;
            })
        }
    };

    // console.log(DALYdata);

    drawMap(mapData, DALYdata);
    drawChart(DALYdata);
    drawParallel(DALYdata);
}
