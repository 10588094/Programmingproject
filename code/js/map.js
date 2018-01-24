function drawMap(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    var year = yearChoice;
    var disorder = disorderChoice;
    var country = countryChoice;
    data = DALYdata[year]['data'];

    var margin = {top: 30, right: 20, bottom: 30, left: 30},
        height = 500,
        width = 800;

    // scale map
    var projection = d3.geo.mercator()
        .scale(130)
        .translate([width / 2, height / 1.4]);

    var path = d3.geo.path().projection(projection)

    // set colors for the map legend
    var colorMap = d3.scale.log()
        .base(100000)
        .domain([0.5, 25710.9])
        .range(['#efeb00', '#ce0000']);

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

            updateData (mapData, DALYdata, disorder, countryChoice, year);
        });

    map.call(tip);


    // var slider = d3.select("#slider").insert("p", "first-child").append("input")
    //     .attr("class", "vis")
    //     .attr("type", "range")
    //     .attr("min", "2000")
    //     .attr("max", "2015")
    //     .attr("value", year)
    //     .attr("id", "currentYear")

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
