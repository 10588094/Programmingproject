function drawMap(DALYdata) {

    data = DALYdata;



    var map = new Datamap({element: document.getElementById('map')})
    fills: {
            defaultFill: black
        }

    // // scale map
    // var projection = d3.geo.mercator()
    //     .scale(100)
    //     .translate([width / 2, height / 1.5]);
    //
    // var path = d3.geo.path().projection(projection)
    //
    // var legendDomain = [0, 50, 100, 150, 25710.9];
    // // var legendLabels = [">13.4", "20+", "27+", "35+", "<44.7"];
    // var legendColors = ['#ff0000', '#ff3200', '#ef5f00', '#ef9b00', '#efeb00']
    //
    // // set colors for the map legend
    // var colorMap = d3.scale.linear()
    //     .domain([0, 25710.9])
    //     .range(['#ff0000', '#efeb00']);

    // // Add the d3 chart canvas
    // var map = d3.select("#map").append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //
    // // set DALY data by country to use in loop of map data
    // var disorderByCountry = {};
    // data.forEach(function(d) { disorderByCountry[d.country] = d.all; });
    //
    // // Draw map
    // map.append("g")
    // .attr("class", "countries")
    // .selectAll("path")
    // .data(mapData.features)
    // .enter().append("path")
    // .attr("d", path)
    // .style("fill", function(d) { return colorMap(disorderByCountry[d.properties.name]); })
    // .style('stroke', 'white')
    // .style('stroke-width', 1.5)
    // .style("opacity", 0.8)
}
