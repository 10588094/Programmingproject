function dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    var dataList = []

    for (countries in data) {
        dataList.push(countries);
    };

    var select = d3.select('#countriesMenu')
      .append('select')
      	.attr('class','select')
        .attr('id', 'dropdownVis')
        .on('change', onchange)

    var options = select
      .selectAll('option')
    	.data(dataList).enter()
    	.append('option')
    		.text(function (d) { return d; });

    function onchange() {
    	selectValue = d3.select('select').property('value')
    	d3.select('body')
    		.append('p')
    		.text(selectValue + ' is the last selected option.')
    };
}
