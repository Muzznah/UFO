//import the data from data.js
//declare a const variable to hold data.
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function that builds the table and fills it with the data.
function buildTable(data) {
    //First clear out any existing data.
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}