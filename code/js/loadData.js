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

    var DALYdata = [
        {year: 2000, data: data2000},
        {year: 2005, data: data2005},
        {year: 2010, data: data2010},
        {year: 2015, data: data2015}
    ];

    DALYdata.forEach(function(year) {
        var yearData = year['data']
        for (country in yearData) {
            if (yearData.hasOwnProperty(country)) {
                var d = yearData[country]
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
            }
        }
    });

    var disorderChoice = 'depressive';
    var countryChoice = 'India';
    var yearChoice = 3;
    // console.log(DALYdata)

    drawMap(mapData, DALYdata, disorderChoice, yearChoice);
    drawChart(DALYdata, disorderChoice, countryChoice);
    drawParallel(DALYdata, yearChoice);
}
