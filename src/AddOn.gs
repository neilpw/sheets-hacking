const API_KEY = "ea249640735c2aa139e4c8f9fbd6460e";
const USER_EMAIL = "neil@prosperworks.com";
const PW_ENV = "api.ali-integration-theta.com";

/**
 * onOpen event handler. Initializes the add-ons menu with the options for this
 * add-on.
 * 
 * @param {Object} Event object passed by the spreadsheet runtime.
 */
function onOpen(e) {
  var addonMenu = SpreadsheetApp.getUi().createAddonMenu();
  addonMenu.addItem('Import data', 'foo');
  addonMenu.addItem('Show Sidebar', 'openImport');

  addonMenu.addToUi();
}
