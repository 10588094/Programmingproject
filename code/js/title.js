function updateTitle(disorderChoice, countryChoice, yearChoice) {
    
    var disorder = disorderChoice;
    var country = countryChoice;
    var year = yearChoice;

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

    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        height = 20,
        width = 800;

    var title = d3.select("#title").append("svg")
        .attr("class", "title")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        // .append("g")
        // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add title
    title.append("text")
        .attr("x", (width / 1.5))
        .attr("y", height + margin.top)
        .attr("text-anchor", "middle")
        .style("font-size", "22px")
        .text(disorder + ' disorders in ' + country + ' in ' + yearName);

}
