function import(entityType, offset) {
  var entities = PWApi.post(entityType + "/search", { 'offset' : offset });

  Logger.log("Entities length: " + entities.length);

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadsheet.getActiveSheet();

  sheet.clear();

  for (var i=0; i<entities.length; i++) {
    var entity = entities[i];

    if (i==0) {
      var headerRow = [];

      for(var key in entity) {
        headerRow.push(key);
      }

      sheet.appendRow(headerRow);

      sheet.setFrozenRows(1);

      // Remove all range protections in the spreadsheet that the user has permission to edit.
      var ss = SpreadsheetApp.getActive();
      var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
      for (var i = 0; i < protections.length; i++) {
        var protection = protections[i];
        if (protection.canEdit()) {
          protection.remove();
        }
      }
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