// from data.js
var tableData = data;
var tabelBody = d3.select("tbody");
var botton = d3.select("#filter-btn")

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
function appendTable(dataToRender){
    tabelBody.html("")
    dataToRender.forEach(ufo => {
        var newRow = tabelBody.append("tr");
        Object.entries(ufo).forEach(([key,value]) => {
            var cell = newRow.append("td");
            cell.text(value)
        });
    });
};

appendTable(tableData)
console.log("UFO table has been rendered")

// Use a date form in your HTML document and write JavaScript code that will listen for events and 
// search through the `date/time` column to find rows that match user input.


function handleClick(){
    // Prevent refreshing
    d3.event.preventDefault()

    // =============================//
    // inpupt element for Date
    var inputElementDate = d3.select("#datetime")

    // Value entered by user
    var inputValueDate = inputElementDate.property("value")
    console.log(inputValueDate)

    // =============================//
    // inpupt element for City
    var inputElementCity = d3.select("#city")

    // Value entered by user
    var inputValueCity = inputElementCity.property("value")

    // =============================//
    // inpupt element State
    var inputElementState = d3.select("#state")

    // Value entered by user
    var inputValueState = inputElementState.property("value")

    // =============================//
    // inpupt element Country
    var inputElementCountry = d3.select("#country")

    // Value entered by user
    var inputValueCountry = inputElementCountry.property("value")

    // =============================//
    // inpupt element Shape
    var inputElementShape = d3.select("#shape")

    // Value entered by user
    var inputValueShape = inputElementShape.property("value")


    // =============================//
    var filteredUFO = tableData;

    // filter data
    if (inputValueDate != ""){
        filteredUFO = filteredUFO.filter(ufo => ufo.datetime === inputValueDate);
    };

    if (inputValueCity != ""){
        filteredUFO = filteredUFO.filter(ufo => ufo.city === inputValueCity);
    };
    if (inputValueState != ""){
        filteredUFO = filteredUFO.filter(ufo => ufo.state === inputValueState);
    };

    if (inputValueCountry != ""){
        filteredUFO = filteredUFO.filter(ufo => ufo.country === inputValueCountry);
    };

    if (inputValueShape != ""){
        filteredUFO = filteredUFO.filter(ufo => ufo.shape === inputValueShape);
    };
      
    // Show data
    appendTable(filteredUFO)

};

botton.on("click", handleClick)

