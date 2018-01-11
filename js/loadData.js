/**
Naam: Daphne Witmer
Studentnummer: 10588094
Function to load data
map: https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
data: http://www.who.int/healthinfo/global_burden_disease/estimates/en/index2.html
**/

function loadData(error, map, DALY2000, DALY2005, DALY2010, DALY2015) {
    if (error) throw error;

    mapData = map;
    data2000 = DALY2000;
    data2005 = DALY2005;
    data2010 = DALY2010;
    data2015 = DALY2015;

    dataList = [data2000, data2005, data2010, data2015]

    // change data from strings to numbers
    dataList.forEach(function(data) {
        data.forEach(function(d) {
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
    });

    console.log(mapData);
    console.log(data2000);
    console.log(data2005);
    console.log(data2010);
    console.log(data2015);

    drawMap(mapData, data2000);
    drawChart(data2000);
    drawParallel(data2000);
}
