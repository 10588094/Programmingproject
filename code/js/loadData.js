/**
Naam: Daphne Witmer
Studentnummer: 10588094
Function to load data
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
                var d = yearData[country];
                d.All = parseFloat(d.All, 10);
                d.Depressive = +d.Depressive;
                d.Bipolar = +d.Bipolar;
                d.Schizophrenic = +d.Schizophrenic;
                d.AlcoholUse = +d.AlcoholUse;
                d.DrugUse = +d.DrugUse;
                d.Anxiety = +d.Anxiety;
                d.Eating = +d.Eating;
                d.Autism = +d.Autism;
                d.Adhd = +d.Adhd;
            }
        }
    });

    var disorderChoice = 'All';
    var countryChoice = 'Netherlands';
    var yearChoice = 3;

    updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
}

function updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    d3.selectAll(".chartVis").remove();
    d3.selectAll(".mapVis").remove();
    d3.selectAll(".parallelVis").remove();
    d3.selectAll("#dropdownCountry0").remove();
    d3.selectAll("#dropdownCountry1").remove();
    d3.selectAll("#dropdownDisorder").remove();

    dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    dropdownCountries1(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    dropdownDisorders(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
}
