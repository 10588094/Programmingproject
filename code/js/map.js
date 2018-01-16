function drawMap(mapData, DALYdata) {

    data = DALYdata[2015];

    // console.log(data)
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
        .range(['#efeb00', '#ff0000']);

    // Add the d3 chart canvas
    var map = d3.select("#map").append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .append("g")

    // set DALY data by country to use in loop of map data
    var disorderByCountry = {};
    data.forEach(function(d) { disorderByCountry[d.country] = d.depressive; });

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

        // tooltips
        .style("stroke","white")
        .style('stroke-width', 0.3)
        .on('mouseover',function(d) {
          tip.show(d);

        d3.select(this)
            .style("opacity", 1)
            .style("stroke","white")
            .style("stroke-width",3);
        })

        .on('mouseout', function(d) {
            tip.hide(d);

        d3.select(this)
            .style("opacity", 0.8)
            .style("stroke","white")
            .style("stroke-width",0.3);

        d3.selectAll("#inf").remove();
    });

    // Set tooltips
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>DALY: </strong><span class='details'>" + disorderByCountry[d.properties.name] +"</span>";
    });

    map.call(tip);

    // var yearSteps = 5;
    //     minYear = d3.keys(data)[0];
    //     maxYear = d3.keys(data)[3];
    //
    // d3.select('#slider').call(d3.slider()
    //     .axis(true).min(minYear).max(maxYear).step(yearSteps)
    //     .on("slide", function(evt, value) {
    //     var newData = _(site_data).filter( function(site) {
    //         return site.created_at < value;
    //         })
    //     })
    // );

    // d3.slider().axis(true).min(2000).max(2015).step(5)
}
