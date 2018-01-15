function drawChart(DALYdata) {

    data = DALYdata;

    // if disorder ==

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 200,
        height = 500;

    // Set the ranges
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    // Add the d3 chart canvas
    var chart = d3.select("#barChart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // x.domain(data.map(function(d) { return d.date; }));
    // y.domain([0, d3.max(data, function(d) { return d.; })]);

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
        .attr("transform", "rotate(-90)")
        .attr("y", 7)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("DALY");
}
