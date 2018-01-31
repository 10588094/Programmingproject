/**
Naam: Daphne Witmer
Studentnummer: 10588094
Function to load and update data
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

    // Make an object with al data, sorted on year and data
    var DALYdata = [
        {year: 2000, data: data2000},
        {year: 2005, data: data2005},
        {year: 2010, data: data2010},
        {year: 2015, data: data2015}
    ];

    // Convert data to numbers when needed
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

    // Set begin values for page
    var disorderChoice = 'All';
    var countryChoice = 'Netherlands';
    var countryChoice2;
    var yearChoice = 3;

    updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
}

function updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    // Remove all visualizations
    d3.selectAll(".chartVis").remove();
    d3.selectAll(".mapVis").remove();
    d3.selectAll(".parallelVis").remove();
    d3.selectAll('#dropdownDisorder').remove();
    d3.selectAll("#dropdownCountry0").remove();
    d3.selectAll("#dropdownCountry1").remove();

    // Draw all visualizations
    drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    dropdownDisorders(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
    dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
    dropdownCountries1(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2);
}
