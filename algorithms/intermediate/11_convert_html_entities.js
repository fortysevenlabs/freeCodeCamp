function convertHTML(str) {
  // not clean for a large list
  return str.replace(/&/g, "&amp;").
              replace(/</g, "&lt;").
              replace(/>/g, "&gt;").
              replace(/'/g, "&apos;").
              replace(/"/g, "&quot;");
}

convertHTML("Dolce & Gabbana");
convertHTML('Stuff in "quotation marks"')
