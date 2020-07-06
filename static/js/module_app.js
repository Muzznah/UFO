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
// Create a new function to handle the filter input.
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable. 
    let filteredData = tableData;

    // if date is entered then fiter and get the rows for only that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
     buildTable(filteredData);
 };

 // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);