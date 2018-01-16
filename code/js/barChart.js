function drawChart(DALYdata) {

    data = DALYdata;
    // disorder = DALYdata
    // country =
    console.log(d3.keys(data)[0])

    var margin = {top: 20, right: 30, bottom: 30, left: 60},
        width = 350,
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

    x.domain([d3.keys(data)[0], d3.keys(data)[1], d3.keys(data)[2], d3.keys(data)[3]]);
    y.domain([0, d3.max(data[2015], function(d) { return d.all;})]);

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

    // for (var year in data) {
    //     if (data.hasOwnProperty(year)) {
    //         dataYear = data[year];
    //         // year.country = "Afghanistan"
    //         console.log(dataYear)
    //         // console.log(d.year)
    //     }
    // }

    // // set DALY data by country to use in loop of map data
    // var disorderByCountry = {};
    // dataYear.forEach(function(d) { disorderByCountry[d.country] = d.depressive; console.log(d.depressive) });
    //
    // // dataYear.forEach(function(d) { d.disorder = d.depressive; console.log(d.disorder)});
    // // data.forEach(function(d) { d.year = dataYear})
    //
    // // Make bars
    // chart.selectAll(".bar")
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("class", "bar")
    //     .attr("x", function(d) { return x(d.date); })
    //     .attr("y", function(d) { return y(d.disorder); })
    //     .attr("height", function(d) { return height - y(d.disorder); })
    //     .attr("width", x.rangeBand())
}
