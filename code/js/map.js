function drawMap(mapData, DALYdata) {

    for (var year in DALYdata) {
        if (DALYdata.hasOwnProperty(year)) {
            var data = DALYdata[2015];
        }
    }
    console.log(data)

    var height = 530,
        width = 600;

    // scale map
    var projection = d3.geo.mercator()
        .scale(110)
        .translate([width / 1.5, height / 2]);

    var path = d3.geo.path().projection(projection)

    // set colors for the map legend
    var colorMap = d3.scale.log()
        .base(100000)
        .domain([0.5, 25710.9])
        .range(['#efeb00', '#ff0000']);

    // Add the d3 chart canvas
    var map = d3.select("#map").append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .append("g")
        // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // set DALY data by country to use in loop of map data
    var disorderByCountry = {};
    data.forEach(function(d) { disorderByCountry[d.country] = d.all; });

    // Draw map
    map.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(mapData.features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", function(d) { return colorMap(disorderByCountry[d.properties.name]); })
        .style('stroke', 'white')
        .style('stroke-width', 1.5)
        .style("opacity", 0.8)
}
