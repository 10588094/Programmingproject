function drawMap(mapData, DALYdata) {

    mapData = mapData

    // scale map
    projection = d3.geo.mercator()
        .scale(100)
        .translate([width / 2, height / 1.5]);

    path = d3.geo.path().projection(projection)

    // Add the d3 chart canvas
    var map = d3.select("#map").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Draw map
    map.append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(mapData.features)
    .enter().append("path")
    .attr("d", path)
    // .style("fill", function(d) { return colorMap(HPIindexByCountry[d.properties.name]); })
    .style('stroke', 'white')
    .style('stroke-width', 1.5)
    .style("opacity", 0.8)
}
