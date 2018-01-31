/**
Naam: Daphne Witmer
Studentnummer: 10588094
**/

function dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    var dataList = []

    DALYdata.forEach(function(d) {
        data = d.data;
        for (countries in data) {
            dataList.push(countries);
        }
    });

    var country = d3.select('#countriesMenu0')
        .append('select')
        .attr('class', 'select')
        .attr('id', 'dropdownCountry0')
        .on('change', onchange)
        .style('float', 'right')

    var options = country
        .selectAll('option')
        .data(dataList).enter()
        .append('option')
        .text(function(d) { return d; });

    function onchange() {
        var countryChoice = d3.select('#dropdownCountry0').property('value')
        updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
    };
}

function dropdownCountries1(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    var dataList = []

    DALYdata.forEach(function(d) {
        data = d.data;
        for (countries in data) {
            dataList.push(countries);
        }
    });

    var country = d3.select('#countriesMenu1')
        .append('select')
        .attr('class', 'select')
        .attr('id', 'dropdownCountry1')
        .on('change', onchange)
        .style('float', 'right')

    var options = country
        .selectAll('option')
        .data(dataList).enter()
        .append('option')
        .text(function(d) {
            return d;
        });

    enable();

    function onchange() {
        countryChoice2 = d3.select('#dropdownCountry1').property('value')
        updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
    };
}

function enable() {

    if (check.checked == true) {
        d3.select('#dropdownCountry1').style('visibility', 'visible');
        $('#check').prop('checked', 'false')
    }

    else {
        d3.select('#dropdownCountry1').style('visibility', 'hidden');
        $('#check').prop('checked')
    }
}
