/**
Naam: Daphne Witmer
Studentnummer: 10588094
**/

function drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice,countryChoice2) {

    data = DALYdata;
    var disorder = disorderChoice;
    var country = countryChoice;

    var margin = {top: 80, right: 30, bottom: 20, left: 60},
        width = 190,
        height = 480;

    // Set the ranges
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2);

    var y = d3.scale.linear()
        .range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    // Add the d3 chart canvas
    var chart = d3.select("#barChart").append("svg")
        .attr("class", "chartVis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain([data[0]['year'],data[1]['year'], data[2]['year'], data[3]['year']]);

    // Make x axis
    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Make y axis
    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
            .attr("y", height - 480)
            .attr("x", width - 210)
            .style("text-anchor", "end")
            .style("text-decoration", "bold")
            .text("DALY")

    var disorderByCountry = []

    data.forEach(function(years) {
        if (years.data[country] == undefined) {
            country = 'undefined';
        }

        else {
            var score = years.data[country][disorder];
            disorderByCountry.push(score);
        }
    });

    if (country == 'undefined') {
        chart.append("text")
            .attr("x", (width / 2))
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text('No data available');
    }

    else {
        drawBars();
    }

function drawBars() {
    y.domain([0, d3.max(disorderByCountry)]);

    // Make bars
    chart.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.year); })
        .attr("y", function(d) { return y(d.data[country][disorder]); })
        .attr("height", function(d) { return height - y(d.data[country][disorder]); })
        .attr("width", x.rangeBand())

    // Change color of bars and show text when hovering over
    .on("mouseover",function(d, i) {
        d3.select(this).style("fill", '#c42d00')
        chart.append("text")
            .attr("class", "toDelete")
            .attr("id", "chartText")
            .attr("x", x(d.year) + (x.rangeBand()/2))
            .attr("y", y(d.data[country][disorder]/1.2))
            .style("text-anchor", "middle")
            .text(d.data[country][disorder])
        })

    .on("mouseout", function(d) {
        d3.select(this).attr("r", 5.5).style("fill", '#ce5c00')
        d3.selectAll(".toDelete")
            .style("visibility", "hidden")
        })

    .on('click', function(d) {

        var year = d.year;

        if (year == 2000) {
            yearChoice = 0;
        }
        if (year == 2005) {
            yearChoice = 1;
        }
        if (year == 2010) {
            yearChoice = 2;
        }
        if (year == 2015) {
            yearChoice = 3;
        }

        updateData (mapData, DALYdata, disorder, country, yearChoice, countryChoice2);
    });
    titleChart();
}

function titleChart() {
    if (country == 'Netherlands') {
        var countryName = 'The Netherlands';
    }
    else {
        var countryName = country;
    }

    chart.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(disorder + " disorders in " + countryName);
}
}
