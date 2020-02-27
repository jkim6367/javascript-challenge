// from data.js
var tableData = data;

function ufoTable(sighting) {

        var tbody = d3.select("tbody")

    tbody.html("")

    sighting.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

ufoTable(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value")

    var parseDate = d3.timeParse("%m/%d/%Y");
    var inputDate = parseDate(inputValue);

    if (inputDate !==null) {
    
        console.log(inputDate);

        var filteredData = tableData.filter(sighting => (parseDate(sighting.datetime).getTime() === inputDate.getTime()));

        console.log(filteredData);
        ufoTable(filteredData);

    } else {
        
        ufoTable([]);
    }
});