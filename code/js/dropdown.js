/**
Naam: Daphne Witmer
Studentnummer: 10588094
This file contains functions to create dropdownmenu"s and update data with the
new selection.
**/

function dropdownDisorders(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {
    // Initiate a list to fill with country names and append firt dropdown option
    var dataList = ["Choose Disorder"]
    var data = DALYdata[yearChoice]["data"]

    // Extract disorder names from data
    var disorders = d3.keys(data["Afghanistan"]).filter(function(d) {
        return d != "country" && d!= "countryCode"});

    // Push disorders to dataList
    for (disorder in disorders) {
        dataList.push(disorders[disorder])
    }

    // Create dropdown menu
    var select = d3.select("#disorderDropdown")
        .append("select")
        .attr("class", "select")
        .attr("id", "dropdownDisorder")
        .style("float", "right")
        .on("change", onchange)

    // Append options to dropdown menu
    var options = select
        .selectAll("option")
        .data(dataList).enter()
        .append("option")
        .text(function(d) {
         return d;
    });

    function onchange() {
        // Determine selected disorder
        disorderChoice = d3.select("#dropdownDisorder").property("value")

        // Update data with seleced disorder
        if (disorderChoice != "Choose Disorder") {
            updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
        }
     };
 }

function dropdownCountries(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2) {

    // Initiate a list to fill with country names and append firt dropdown option
    var dataList = ["Choose Country"]

    // Extract country names from data
    DALYdata.forEach(function(d) {
        data = d.data;
        for (countries in data) {
            dataList.push(countries);
        }
    });

    // Create dropdown menu
    var country = d3.select("#countriesMenu0")
        .append("select")
        .attr("class", "select")
        .attr("id", "dropdownCountry0")
        .on("change", onchange)
        .style("float", "right")

    // Append options to dropdown menu
    var options = country
        .selectAll("option")
        .data(dataList).enter()
        .append("option")
        .text(function(d) {
            return d;
        });

    function onchange() {
        // Determine selected country
        var countryChoice = d3.select("#dropdownCountry0").property("value")

        // Update data with seleced country
        if (countryChoice != "Choose Country") {
            updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
        }
    };
}

function dropdownCountries1(mapData, DALYdata, disorderChoice, countryChoice, yearChoice) {

    // Initiate a list to fill with country names and append firt dropdown option
    var dataList = ["Choose Country"]

    // Extract country names from data
    DALYdata.forEach(function(d) {
        data = d.data;
        for (countries in data) {
            dataList.push(countries);
        }
    });

    // Create dropdown menu
    var country = d3.select("#countriesMenu1")
        .append("select")
        .attr("class", "select")
        .attr("id", "dropdownCountry1")
        .on("change", onchange)
        .style("float", "right")

    // Append options to dropdown menu
    var options = country
        .selectAll("option")
        .data(dataList).enter()
        .append("option")
        .text(function(d) {
            return d;
        });

    enable();

    function onchange() {
        // Determine selected country
        var countryChoice2 = d3.select("#dropdownCountry1").property("value")

        // Update data with seleced country
        if (countryChoice2 != "Choose Country") {
            updateData(mapData, DALYdata, disorderChoice, countryChoice, yearChoice, countryChoice2)
        }
    };
}

function enable() {

    // Show dropdown menu when checkbox is checked
    if (check.checked == true) {
        d3.select("#dropdownCountry1").style("visibility", "visible");
        $("#check").prop("checked", "false")
    }

    // Hide dropdown menu when checkbox is unchecked
    else {
        d3.select("#dropdownCountry1").style("visibility", "hidden");
        $("#check").prop("checked")
    }
}
