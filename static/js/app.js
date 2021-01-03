// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
  
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  var thead= d3.select("thead");
    //Checking to see if data import works
  filteredData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = thead.append("tr")

  Object.entries(ufoReport).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value);
  });

});
};