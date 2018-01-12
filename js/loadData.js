/**
Naam: Daphne Witmer
Studentnummer: 10588094
Function to load data
map: https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
data: http://www.who.int/healthinfo/global_burden_disease/estimates/en/index2.html
**/

function loadData(error, DALY2000, DALY2005, DALY2010, DALY2015) {
    if (error) throw error;

    // mapData = map;
    data2000 = DALY2000;
    data2005 = DALY2005;
    data2010 = DALY2010;
    data2015 = DALY2015;

    var DALYdata = [{2000: data2000}, {2005: data2005}, {2010: data2010}, {2015: data2015}];

    console.log(DALYdata[0])

    // // transform data from strings to numbers
    DALY2000.forEach(function(d) {
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
    });
    // DALYdata.foreach(function(year) {
    //     year.forEach(function(d) {
    //         d.all = +d.all;
    //         d.depressive = +d.depressive;
    //         d.bipolar = +d.bipolar;
    //         d.schizophrenia = +d.schizophrenia;
    //         d.alcoholUse = +d.alcoholUse;
    //         d.drugUse = +d.drugUse;
    //         d.anxiety = +d.anxiety;
    //         d.eating = +d.eating;
    //         d.autism = +d.autism;
    //         d.adhd = +d.adhd;
    //     })
    // });

    // console.log(DALYdata);
    console.log(data2000);
    // console.log(data2005);
    // console.log(data2010);
    // console.log(data2015);

    drawMap(data2000);
    drawChart(data2000);
    drawParallel(data2000);
}
