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

    // change data from strings to numbers
    data2000.forEach(function(d) {
    d.all = +d.all;
    d.depressive = +d.depressive;
    d.bipolar = +d.bipolar;
    d.alcoholUse = +d.alcoholUse;
    d.drugUse = +d.drugUse;
    d.anxiety = +d.anxiety;
    d.eating = +d.eating;
    d.autism = +d.autism;
    d.ADHD = +d.ADHD;
    });

    console.log(mapData);
    console.log(data2000);
}
