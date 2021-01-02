// from data.js
var tableData = data;

var thead= d3.select("thead");

//Checking to see if data import works
console.log(tableData);

tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = thead.append("tr");

Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });

});


