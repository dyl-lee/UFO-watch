// import data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

// build table function
function buildTable(data) {
    tbody.html("");                                     // tbody.html points JS to table in index.html, ("") represents empty string. Therefore, use empty string when creating table
    data.forEach((dataRow) => {                         // forEach() only loops through arrays...
        let row = tbody.append("tr");                   // adds data row by row, JS: find tbody in HTML and add row ("tr"). Keep in mind this code will search for <tr> tag. Here, row is limited to just this code block therefore let instead of var.
        Object.values(dataRow).forEach((val) => {       // each object is an individual sighting. Add values() into dataRow, forEach((val) specifies one object per row, where val = each item in object
            let cell = row.append("td");                // append each object value to a cell/table data <td> tag in table
            cell.text(val);                             // chain .text(value) to the variable, cell. Extracts text of value to add data to cell
            }
        );
    });
}

// handleClick function
function handleClick() {
    let date = d3.select('#datetime').property('value');        // D3 syntax is closely linked to html; select first element (selector string) with id='datetime' in html tags, chain property() to extract info in datetime and store in date
    let filteredData = tableData;                               // default filter has none applied, so all data is returned to begin with
    function checkData(row) {
      return row.datetime === date
    };
    if (date) {
        filteredData = filteredData.filter(checkData);      // show only rows with date corresponding to the date filter created above. === means strict equality (type and value check)
    
    buildTable(filteredData);
    }
}

// listen for button click
d3.selectAll('#filter-btn').on("click", handleClick);           // Tells D3 to execute handleClick function when btn id="filter-btn" is clicked

// build table when page loads
buildTable(tableData);