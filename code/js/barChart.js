/**
Naam: Daphne Witmer
Studentnummer: 10588094
This file containts functions to create an interactive barchart
**/

function drawChart(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    var data = DALYdata;
    var disorder = disorderChoice;
    var country = countryChoice;
    var disorderByCountry = []

    // Change countryName for the
    if (country == 'Netherlands') {
        var countryName = 'The Netherlands';
    }
    else {
        var countryName = country;
    }

    var margin = { top: 80, right: 30, bottom: 20, left: 60 },
        width = 190,
        height = 480;

    // Set the ranges for x and y and domain for x
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2)
        .domain([data[0]['year'], data[1]['year'], data[2]['year'], data[3]['year']]);

    var y = d3.scale.linear()
        .range([height, 0])

    // Define the axes
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var colors = ['#efeb00', '#ce0000']

    // Set colors for the bars
    var colorMap = d3.scale.log()
        .base(2)
        .domain([0.3, 25710.9])
        .range(colors);

    // Add a canvas for the chart
    var chart = d3.select("#barChart").append("svg")
        .attr("class", "chartVis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Check if data for country is undefined, if not push data to list
    data.forEach(function(d) {
        if (d.data[country] == undefined) {
            country = 'undefined';
        }

        else {
            var score = d.data[country][disorder];
            disorderByCountry.push(score);
        }
    });

    if (country != 'undefined') {

        y.domain([0, d3.max(disorderByCountry)]);

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
            .attr("y", height - 490)
            .attr("x", width - 215)
            .style("text-anchor", "end")
            .style("text-decoration", "bold")
            .text("DALY")

        // Initiate bars
        var bar = chart.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.year); })
            .attr('y', 480)
            .attr('height', 1)
            .attr('width', x.rangeBand())
            .attr('fill', function(d) { return colorMap(d.data[country][disorder]); })
            .style('opacity', 0.8)
            .on('mouseover', mouseOver)
            .on('mouseout', mouseOut)
            .on('click', onClick)

        // Draw bars with delay
        bar.transition()
            .duration(1200)
            .attr("y", function(d) { return y(d.data[country][disorder]); })
            .attr("height", function(d) { return height - y(d.data[country][disorder]); })

        // Change color of bars and show values when hovering over
        function mouseOver(d) {
            d3.select(this)
                .style('opacity', 1)
            chart.append("text")
                .attr("class", "toDelete")
                .attr("id", "chartText")
                .attr("x", x(d.year) + (x.rangeBand() / 2))
                .attr("y", y(d.data[country][disorder] / 1.2))
                .style("text-anchor", "middle")
                .text(d.data[country][disorder])
        }

        // Remove mouseOver attributes
        function mouseOut(d) {
            d3.select(this)
                .style('opacity', 0.8)
            d3.selectAll(".toDelete")
                .style("visibility", "hidden")
        }

        // Upload map and parallel coordinates data for year when clicking on the bar
        function onClick(d) {

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

            updateData(mapData, DALYdata, disorder, country, yearChoice, countryChoice2);
        };
    }

    titleChart();

    function titleChart() {

        // Define text for title 
        if (country == 'undefined') {
            var titleText = 'No data available';
        }

        else {
            var titleText = disorder + " disorders in " + countryName;
        }

        chart.append("text")
            .attr("x", (width / 2))
            .attr("y", 0 - (margin.top / 2.4))
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text(titleText);

    }
}
