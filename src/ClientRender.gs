function openImport() {
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setTitle('My AWESOME Sidebar')
    .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .showSidebar(html);
}