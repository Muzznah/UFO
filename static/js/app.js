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
// Build the table when the page loads
buildTable(tableData);

// Create a new function to handle the filter input.
function filterTable() {

    let inputDate = d3.select("#datetime").property("value");
    let inputCity = d3.select("#city").property("value");
    let inputState= d3.select("#state").property("value");
    let inputCountry= d3.select("#country").property("value");
    let inputShape= d3.select("#shape").property("value");

    // set a default filter and save it to a new variable. 
    let filteredData = tableData;

    // if date is entered then filter and get the rows for only that date.
    if (inputDate) {
        filteredData = filteredData.filter(row => row.datetime === inputDate);
    };
     // if city is entered then filter and get the rows for only that city.
     if (inputCity) {
        filteredData = filteredData.filter(row => row.city === inputCity);
    };

    // if country is entered then filter and get the rows for only that country.
    if (inputCountry) {
        filteredData = filteredData.filter(row => row.country === inputCountry);
    };
    // if state is entered then filter and get the rows for only that state.
    if (inputState) {
        filteredData = filteredData.filter(row => row.state === inputState);
    };
    // if shape is entered then filter and get the rows for only that shape.
    if (inputShape) {
        filteredData = filteredData.filter(row => row.shape === inputShape);
    };


       
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
     buildTable(filteredData);
 };

 // Create a new function to clear all the filters input by reloading the page.
function reload(){
location.reload();
};
    
 // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", filterTable);
d3.selectAll("#clear-btn").on("click", reload);

// Build the table when the page loads
// buildTable(tableData);