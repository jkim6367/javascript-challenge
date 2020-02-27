// from data.js
var tableData = data;

// Create function to loop through objects
function ufoTable(sighting) {

        // Create variable to set as the table body    
        var tbody = d3.select("tbody")

    tbody.html("")

    // Loop through objects separating key field from value field to add table row and table data
    sighting.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Add data to the table
ufoTable(tableData);

// Create button variable to set reference to filter button in html
var button = d3.select("#filter-btn");

// Define click handler 
button.on("click", function() {
    // Create input fields to trigger a change in event
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value")

    // Parse Date format for input date
    var parseDate = d3.timeParse("%m/%d/%Y");
    var inputDate = parseDate(inputValue);

    // Condition statement do proceed when date is entered
    if (inputDate !==null) {
    
        console.log(inputDate);

        // Filter data to retrieve input date
        var filteredData = tableData.filter(sighting => (parseDate(sighting.datetime).getTime() === inputDate.getTime()));

        console.log(filteredData);
        ufoTable(filteredData);

    } else {
        
        ufoTable([]);
    }
});