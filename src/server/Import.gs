function import() {
  var people = PWApi.post('people/search', {});

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadsheet.getActiveSheet();

  for (var i=0; i<people.length; i++) {
    sheet.appendRow(people[i]);
  }
}
