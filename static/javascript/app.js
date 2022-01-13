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