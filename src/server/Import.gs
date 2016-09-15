function import() {
  var people = PWApi.post('people/search', {});

  Logger.log("People length: " + people.length);

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadsheet.getActiveSheet();

  sheet.clearContents();

  for (var i=0; i<people.length; i++) {
    var person = people[i];

    if (i==0) {
      var headerRow = [];

      for(var key in person) {
        headerRow.push(key);
      }

      sheet.appendRow(headerRow);
      sheet.setFrozenRows(1);
    }

    Logger.log("Person: " + person);

    var row = convertToRow(person);

    Logger.log("Row: " + row);

    sheet.appendRow(convertToRow(person));
  }
}

function convertToRow(obj) {
  var row = [];

  for (var key in obj) {
    row.push(obj[key]);
  }

  return row;
}