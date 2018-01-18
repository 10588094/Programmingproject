function drawParallel(DALYdata, yearChoice) {

    var year = yearChoice;
    data = DALYdata[year]['data'];
    dataYear = DALYdata[year]['year']
    console.log(data)
    // console.log(d3.keys(data))

    // var margin = {top: 30, right: 10, bottom: 10, left: 10},
    //     width = 960 - margin.left - margin.right,
    //     height = 500 - margin.top - margin.bottom;

    var color = function(d) { return green_to_blue(d['depressive']); };

    var parallel = d3.parcoords()("#parallel")
        .color(color)
        .alpha(0.4);
}
