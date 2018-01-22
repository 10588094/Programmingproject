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
                var d = yearData[country];
                d.population = +d.population;
                d.All = +d.All;
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

    updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice)
}

function updateData (mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    d3.selectAll(".dropdownOptions")
        .on("click", function() {
            var disorder = this.getAttribute("value")

            if(disorder == "all") {
                var disorderChoice = 'All'
            }
            if(disorder == "depressive") {
                var disorderChoice = 'Depressive'
            }
            if(disorder == "bipolar") {
                var disorderChoice = 'Bipolar'
            }
            if(disorder == "schizophrenia") {
                var disorderChoice = 'Schizophrenic'
            }
            if(disorder == "alcoholUse") {
                var disorderChoice = 'AlcoholUse'
            }
            if(disorder == "drugUse") {
                var disorderChoice = 'DrugUse'
            }
            if(disorder == "anxiety") {
                var disorderChoice = 'Anxiety'
            }
            if(disorder == "eating") {
                var disorderChoice = 'Eating'
            }
            if(disorder == "autism") {
                var disorderChoice = 'Autism'
            }
            if(disorder == "adhd") {
                var disorderChoice = 'Adhd'
            }

            d3.selectAll(".chartVis").remove();
            d3.selectAll(".mapVis").remove();
            d3.selectAll(".parallelVis").remove();
            d3.selectAll(".title").remove();

            drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
            drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
            drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
            updateTitle(disorderChoice, countryChoice, yearChoice);
        });

    d3.selectAll(".chartVis").remove();
    d3.selectAll(".mapVis").remove();
    d3.selectAll(".parallelVis").remove();
    d3.selectAll(".title").remove();

    drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
    drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
    drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice);
    updateTitle(disorderChoice, countryChoice, yearChoice);
}
