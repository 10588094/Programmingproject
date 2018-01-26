/**
Naam: Daphne Witmer
Studentnummer: 10588094
**/

function drawParallel(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    console.log(countryChoice)
    console.log(countryChoice2)
    var year = 1;
    var country = countryChoice;
    var country2 = countryChoice2;
    var disorder = disorderChoice;

    data = DALYdata[year]['data'];
    dataYear = DALYdata[year]['year']

    var dataList = []

    for (countries in data) {
        dataList.push(data[countries])
    }

    if (data[country] == undefined) {
        var countryData = 'undefined';
    }

    if (country == 'Netherlands') {
        var countryName = 'The Netherlands';
    }

    else {
        var countryName = country;
    }


    var margin = {top: 60, right: 10, bottom: 10, left: 10},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var parallel = d3.select("#parallel").append("svg")
        .attr("class", "parallelVis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // to make log scale possible
    for (countries in data) {
        if (data[countries].Eating == 0) {
            data[countries].Eating = 0.01;
        }
        if (data[countries].Adhd == 0) {
            data[countries].Adhd = 0.01;
        }
    }

  // Extract the list of dimensions and create a scale for each.
  x.domain(dimensions = d3.keys(dataList[0]).filter(function(d) {
    return d != "country" && d != "All" && (y[d] =  d3.scale.log()
        .base(2)
        .domain(d3.extent(dataList, function(p) { return p[d]; }))
        .range([height, 0]));
    }));

    // Add grey background lines for context.
    background = parallel.append("g")
        .attr("class", "background")
      .selectAll("path")
        .data(dataList)
      .enter().append("path")
        .attr("d", path)
        // .attr("id", function(d) { return d.country + 'parallel'; });

    // Add blue foreground lines for focus.
    foreground = parallel.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(dataList)
      .enter().append("path")
        .attr("d", path)
        .attr("id", function(d) { return d.country + 'parallel'; })
        .style ("visibility", "hidden");

    var countryid = d3.selectAll('#'+ country + 'parallel')
    // var str = countryid.

    // console.log(countryid)

    // console.log(d3.selectAll('#' + country + 'parallel'))
    d3.selectAll('#'+ country + 'parallel')
        .style ("visibility", "visible")

    // console.log(country)

    if (country2 != undefined) {
        d3.selectAll('#'+ country2 + 'parallel')
            .style ("visibility", "visible")
    }

    // Add a group element for each dimension.
    var g = parallel.selectAll(".dimension")
        .data(dimensions)
        .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", function(d) { return "translate(" + x(d) + ")"; })

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });

    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(function(d) {
            d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
        })
        .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);

    parallel.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 1.4))
        .attr("text-anchor", "middle")
        .style("font-size", "24px")
        .text(titleParallel());

// console.log(countryName)
    function titleParallel() {

        if (country2 == undefined && countryData != 'undefined') {
            console.log(countryName)
            return ("Comorbidity of disorders in " + countryName);
        }

        else if (countryData == 'undefined') {
            console.log(2)
            return ('No data available for ' + countryName);
        }
        else {
            console.log(3)
            return ("Comorbidity of disorders in " + countryName + ' and ' + country2);
        }
    }

function position(d) {
  var v = dragging[d];
  return v == null ? x(d) : v;
}

// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}

// Handles a brush event, toggling the display of foreground lines.
function brush() {
  var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      extents = actives.map(function(p) { return y[p].brush.extent(); });
  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    }) ? null : "none";
  });
}
}
