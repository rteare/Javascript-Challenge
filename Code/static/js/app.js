// from data.js
var tableData = data;
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select('tbody');

// Add UFO data to table
tableData.forEach(ufos => {
    // console.log(ufos);

    var row = tbody.append('tr');

    Object.entries(ufos).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);        
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
//var form = d3.select("#form");

// Create event handlers 
button.on("click", mouseClick);
//form.on("submit", mouseClick);

// Complete the event handler function for the form
function mouseClick() {

// clear the existing output
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime").property("value");
  //console.log(inputDate);

  // Get the value property of the input element
  var filteredDate = tableData.filter(ufos => ufos.datetime === inputDate);
  //console.log(filteredDate);
  
  // Add UFO data to table
  filteredDate.forEach(ufos => {
      // console.log(ufos);

    var row = tbody.append('tr');

    Object.entries(ufos).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);        
    });
  });
};
