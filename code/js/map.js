function drawMap(mapData, DALYdata, disorderChoice, yearChoice) {

    var year = yearChoice;
    data = DALYdata[year]['data'];
    var disorder = disorderChoice;

    // var margin = {top: 20, right: 20, bottom: 30, left: 30},
    var height = 550,
        width = 800;

    // scale map
    var projection = d3.geo.mercator()
        .scale(125)
        .translate([width / 2, height / 1.5]);

    var path = d3.geo.path().projection(projection)

    // set colors for the map legend
    var colorMap = d3.scale.log()
        .base(100000)
        .domain([0.5, 25710.9])
        .range(['#efeb00', '#ce0000']);

    // Add the d3 chart canvas
    var map = d3.select("#map").append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .append("g")

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
        });

    // Set tooltips
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>DALY: </strong><span class='details'>" + disorderByCountry[d.properties.name] + "</span>";
        });

    map.call(tip);

    // var yearSteps = 5;
    year = d3.keys(data)[0];
    //     maxYear = d3.keys(data)[3];

    //
    var slider = d3.select("#slider").insert("p", "first-child").append("input")
        .attr("type", "range")
        .attr("min", "2000")
        .attr("max", "2015")
        .attr("value", year)
        .attr("id", "currentYear")

    // slider.insert("g", ".track-overlay")
    // .attr("class", "ticks")
    // .attr("transform", "translate(0," + 18 + ")")
    // .selectAll("text")
    // .data(x.ticks(10))
    // .enter().append("text")
    // .attr("x", x)
    // .attr("text-anchor", "middle")
    // .text(function(d) { return d + "°"; });

}
