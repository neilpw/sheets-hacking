function import(entityType, offset) {
  var entities = PWApi.post(entityType + "/search", { 'offset' : offset });

  Logger.log("Entities length: " + entities.length);

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadsheet.getActiveSheet();

  sheet.clearContents();

  for (var i=0; i<entities.length; i++) {
    var entity = entities[i];

    if (i==0) {
      var headerRow = [];

      for(var key in entity) {
        headerRow.push(key);
      }

      sheet.appendRow(headerRow);

      sheet.setFrozenRows(1);

      var range = sheet.getRange("1:1");
      var protection = range.protect().setDescription("Field Keys");
      protection.removeEditors(protection.getEditors());
    }

    Logger.log("Entity: " + entity);

    var row = convertToRow(entity);

    Logger.log("Row: " + row);

    sheet.appendRow(convertToRow(entity));
  }

  return {
    imported: entities.length
  };
}

function convertToRow(obj) {
  var row = [];

  for (var key in obj) {
    row.push(obj[key]);
  }

  return row;
}