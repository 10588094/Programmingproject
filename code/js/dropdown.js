function dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    var dataList = []

    DALYdata.forEach(function(d) {
        data = d.data;
        for (countries in data) {
            dataList.push(countries);
        }
    });

    var select = d3.select('#countriesMenu')
        .append('select')
        .attr('class', 'select')
        .attr('id', 'dropdownVis')
        .on('change', onchange)

    var options = select
        .selectAll('option')
        .data(dataList).enter()
        .append('option')
        .text(function(d) {
            return d;
        });

    function onchange() {
        selectValue = d3.select('select').property('value')
        countryChoice = selectValue;
        updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice)
    };
}

function dropdownDisorders(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    var dataList = []

    for (countries in data) {
        dataList.push(data[countries])
    }

    var disorders = d3.keys(dataList[0]).filter(function(d) {
      return d != "country"});
    console.log(disorders)

    var select = d3.select('#disorderMenu')
        .append('select')
        .attr('class', 'select')
        .attr('id', 'dropdownVis')
        .on('change', onchange)

    var options = select
        .selectAll('option')
        .data(disorders).enter()
        .append('option')
        .text(function(d) {
            return d;
        });

    function onchange() {
        selectValue = d3.select('select').property('value')
        countryChoice = selectValue;
        updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice)
    };
}
