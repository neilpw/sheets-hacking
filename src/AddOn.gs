var API_KEY = "96f3ffd528ad4c1f6b181dc19acf26c6";
var USER_EMAIL = "neil@prosperworks.com";
var PW_ENV = "api.ali-staging.com";

/**
 * onOpen event handler. Initializes the add-ons menu with the options for this
 * add-on.
 * 
 * @param {Object} Event object passed by the spreadsheet runtime.
 */
function onOpen(e) {
  var addonMenu = SpreadsheetApp.getUi().createAddonMenu();
  addonMenu.addItem('Import data', 'import');
  addonMenu.addItem('Show Sidebar', 'openImport');

  addonMenu.addToUi();
}
