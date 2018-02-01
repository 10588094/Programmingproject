/**
Naam: Daphne Witmer
Studentnummer: 10588094
This file contains functions to draw a parallel coordinates visualization
**/

function drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    var year = yearChoice;
    var country = countryChoice;
    var country2 = countryChoice2;
    var disorder = disorderChoice;
    var data = DALYdata[year]['data'];
    var dataYear = DALYdata[year]['year'];
    var dataList = [];

    for (countries in data) {
        dataList.push(data[countries])
    }

    if (data[country] == undefined) {
        var countryData = 'undefined';
    }

    if (country == 'Netherlands') {
        var countryName = 'The Netherlands';
    }

    else {
        var countryName = country;
    }

    var margin = {top: 60, right: 100, bottom: 10, left: 10},
        width = 960 - margin.left - margin.right,
        height = 550 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var parallel = d3.select("#parallel").append("svg")
        .attr("class", "parallelVis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // to make log scale possible
    for (countries in data) {
        if (data[countries].Eating == 0) {
            data[countries].Eating = 0.01;
        }
        if (data[countries].Adhd == 0) {
            data[countries].Adhd = 0.01;
        }
    }

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(dataList[0]).filter(function(d) {
        return d != "country" && d!= "countryCode" && d != "All" && (y[d] =  d3.scale.log()
            .base(2)
            .domain(d3.extent(dataList, function(p) { return p[d]; }))
            .range([height, 0]));
    }));

    // Add grey background lines for context.
    background = parallel.append("g")
        .attr("class", "background")
      .selectAll("path")
        .data(dataList)
      .enter().append("path")
        .attr("d", path)
        .on('mouseover', mouseOver)
        .on('mouseout', mouseOut)

    // Add blue foreground lines for focus.
    foreground = parallel.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(dataList)
      .enter().append("path")
        .attr("d", path)
        .attr("id", function(d) { return d.countryCode; })
        .style ("visibility", "hidden")

    function mouseOver(d) {
        // Change line when hovering over
        d3.select(this)
            .style('opacity', 1)
            .style('stroke-width', 2)

        // Show country name when hovering over
        parallel.append("text")
             .attr("class", "hoverText")
             .attr("x", x('Adhd') + 10)
             .attr("y", y['Adhd'](d.Adhd))
             .style("font-size", "12px")
             .text(d.country)
    }

    function mouseOut(d, i) {
        // Change line back after hovering
        d3.select(this)
            .style('opacity', 0.3)

        // Remove text after hovering
        d3.selectAll('.hoverText').remove();
    }

    if (countryData != 'undefined') {
        // Show selected line
        d3.selectAll('#'+ data[country].countryCode)
            .style ("visibility", "visible")

        // Show country name for line
        parallel.append("text")
            .attr("x", x('Adhd') + 10)
            .attr("y", y['Adhd'](data[country].Adhd) )
            .style("font-size", "12px")
            .text(country)
    }

    if (country2 != undefined) {
        // Show second selected line give it another color to seperate the two lines
        d3.selectAll('#'+ data[country2].countryCode)
            .style ("visibility", "visible")
            .style('stroke', '#d15904')

        // SHow country name for line
        parallel.append("text")
            .attr("x", x('Adhd') + 10)
            .attr("y", y['Adhd'](data[country2].Adhd) )
            .style("font-size", "12px")
            .text(country2)
    }

    // Add a group element for each dimension.
    var g = parallel.selectAll(".dimension")
        .data(dimensions)
        .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", function(d) {return "translate(" + x(d) + ")"; })

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });

    // Make title for parallel coordinates with selected country and year
    parallel.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 1.4))
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text(titleParallel());

    function titleParallel() {

        if (year == 0) {
            yearName = 2000;
        }
        if (year == 1) {
            yearName = 2005;
        }
        if (year == 2) {
            yearName = 2010;
        }
        if (year == 3) {
            yearName = 2015;
        }


        if (country2 == undefined && countryData != 'undefined') {
            return ("Comorbidity of disorders in " + countryName + ", " + yearName);
        }

        else if ( country2 != undefined && countryData == 'undefined') {
            return ('Comorbidity of disorders in ' + country2 + ', no data for ' + countryName + ", " + yearName);
        }

        else if (countryData == 'undefined') {
            return ('No data available for ' + countryName + ", " + yearName);
        }
        else {
            return ("Comorbidity of disorders in " + countryName + ' and ' + country2 + ", " + yearName);
        }
    }

    function position(d) {
        var v = dragging[d];
        return v == null ? x(d) : v;
    }

    // Returns the path for a given data point.
    function path(d) {
        return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
    }

}
