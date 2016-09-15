/**
 * onOpen event handler. Initializes the add-ons menu with the options for this
 * add-on.
 * 
 * @param {Object} Event object passed by the spreadsheet runtime.
 */
function onOpen(e) {
  var addonMenu = SpreadsheetApp.getUi().createAddonMenu();
  addonMenu.addItem('Import data', 'foo');

  addonMenu.addToUi();
}
