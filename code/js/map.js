/**
Naam: Daphne Witmer
Studentnummer: 10588094
map: https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
**/

function drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    var year = yearChoice;
    var disorder = disorderChoice;
    var country = countryChoice;
    data = DALYdata[year]['data'];

    var margin = {top: 50, right: 10, bottom: 30, left: 10},
        height = 500,
        width = 900;

    // scale map
    var projection = d3.geo.mercator()
        .scale(150)
        .translate([width / 2.5, height / 1.4]);

    var path = d3.geo.path().projection(projection)

    var colors = ['#efeb00', '#ce0000']

    // set colors for the map legend
    var colorMap = d3.scale.log()
        .base(100000)
        .domain([0.5, 25710.9])
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


    // set DALY data by country to use in loop of map data
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

        .on('mouseover', function(d) {
            tip.show(d);

            d3.select(this)
                .style("opacity", 1)
                .style("stroke", "white")
                .style("stroke-width", 3);
        })

        .on('mouseout', function(d) {
            tip.hide(d);

            d3.select(this)
                .style("opacity", 0.8)
                .style("stroke", "white")
                .style("stroke-width", 0.8);
        })

        .on('click', function(d) {
            tip.hide(d);

            var countryChoice = d.properties.name;

            updateData (mapData, DALYdata, disorder, countryChoice, year, countryChoice2);
        });

    map.call(tip);

    // Apply legend for HPI index
    var legendMap = map.selectAll(".legendMap")
        .data(colors)
        .enter().append("g")
        .attr("class", "legendMap")
        .attr("transform", function(d, i) { return "translate(0," + i * 22 + ")"; });

    // // Append collored rects for legend
    // legendMap.append("rect")
    //     .attr("x", width - 650)
    //     .attr("y", 340)
    //     .attr("width", 18)
    //     .attr("height", 18)
    //     .style("fill", function(d, i){ return colors[i]; });

    // // Append text to legend
    // legendMap.append("text")
    //     .attr("x", width - 620)
    //     .attr("y", 350)
    //     .attr("dy", ".35em")
    //     .text(function(d, i){ return legendLabels[i]; });

    titleMap();

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

    map.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(disorder + " disorders over the world in " + yearName);
}

}
