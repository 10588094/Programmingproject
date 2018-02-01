/**
Naam: Daphne Witmer
Studentnummer: 10588094
This file contains functions to draw a map with topojson
map: https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
**/

function drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    var year = yearChoice;
    var disorder = disorderChoice;
    var country = countryChoice;
    var data = DALYdata[year]['data'];

    var margin = {top: 80, right: 10, bottom: 30, left: 10},
        height = 500,
        width = 900;

    // Scale map and determine position
    var projection = d3.geo.mercator()
        .scale(140)
        .translate([width / 1.7, height / 1.6]);

    // Define paths for countries
    var path = d3.geo.path().projection(projection)

    // Set colors for the map
    var colors = ['#efeb00', '#ce0000']

    // Scale colors logaritmic
    var colorMap = d3.scale.log()
        .base(2)
        .domain([0.3, 25710.9])
        .range(colors);

    // Set tooltips
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([0, 0])
        .html(function(d) {
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>DALY: </strong><span class='details'>" + disorderByCountry[d.properties.name] + "</span>";
        });

    // Add the d3 chart canvas
    var map = d3.select("#map").append("svg")
        .attr("class", "mapVis")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Set DALY data by country to use in loop of map data
    var disorderByCountry = {};
    for (countries in data) {
        var d = data[countries]
        disorderByCountry[countries] = d[disorder];
    };

    // Draw map
    map.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(mapData.features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", '#a5a4a0')
        .style("fill", function(d) {
            return colorMap(disorderByCountry[d.properties.name]);
        })
        .style('stroke', 'white')
        .style('stroke-width', 0.8)
        .style("opacity", 0.8)

        // Set mouseover event
        .on('mouseover', function(d) {
            tip.show(d);
            d3.select(this)
                .style("opacity", 1)
                .style("stroke", "white")
                .style("stroke-width", 3);
        })

        // Set mouseout event
        .on('mouseout', function(d) {
            tip.hide(d);
            d3.select(this)
                .style("opacity", 0.8)
                .style("stroke", "white")
                .style("stroke-width", 0.8);
        })

        // Upload data on click for selected country
        .on('click', function(d) {
            tip.hide(d);
            var countryChoice = d.properties.name;
            updateData (mapData, DALYdata, disorder, countryChoice, year, countryChoice2);
        });

    map.call(tip);
    drawLegend();
    titleMap();

    function drawLegend() {

        // Append a defs element for the legend
        var defs = map.append("defs");

        // Append a linearGradient element to the defs and give it a unique id
        var linearGradient = defs.append("linearGradient")
            .attr("id", "linear-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        // Set the color for the start of the legend
        linearGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", '#efeb00');

        // Set the color for the end of the legend
        linearGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", '#ce0000');

        // Draw the rectangle and fill with gradient
        map.append("rect")
        	.attr("width", 450)
        	.attr("height", 12)
            .attr('x', 400)
            .attr('y', 430)
            .style('opacity', 0.8)
        	.style("fill", "url(#linear-gradient)")

        // Append text to legend
        map.append("text")
            .attr("x", 570)
            .attr("y", 420)
            .style("font-size", "14px")
            .text('*DALY score');

        map.append("text")
            .attr("x", 400)
            .attr("y", 455)
            .style("font-size", "14px")
            .text('0.3');

        map.append("text")
            .attr("x", 810)
            .attr("y", 455)
            .style("font-size", "14px")
            .text('25710');
    }

    function titleMap() {

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

        if (country == 'Netherlands') {
            country = 'The Netherlands';
        }

        // Set title for map and upload with year and disorder
        map.append("text")
            .attr("x", (width / 1.4))
            .attr("y", 0 - (margin.top / 1.6))
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text(disorder + " disorders over the world in " + yearName);
    }
}
