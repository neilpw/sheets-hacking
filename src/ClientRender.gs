function importData() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
    .setTitle('My AWESOME Sidebar')
    .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .showSidebar(html);
}