var client = require('smartsheet');
var smartsheet = client.createClient({accessToken:'lcfgk6pfzl6jpnp2vpta4pkgly'});

var columnMap = {};

function getCellByColumnName(row, columnName) {
    var columnId = columnMap[columnName];
    return row.cells.find(function(c) {
        return (c.columnId == columnId);
    });
}


var options = {
    id: 1207228821727108
  };

smartsheet.sheets.getSheet(options)
.then(function(sheet){
    sheet.columns.forEach(function(column){
        columnMap[column.title] = column.id;
        //console.log(columnMap)
    })


    var rowNumber = 0
    var outRow = sheet.rows[rowNumber]
    var numCell = getCellByColumnName(outRow,'일련번호')
    var conCIPCell = getCellByColumnName(outRow,'건축감리자')
    var conCategoryCell = getCellByColumnName(outRow,'건축 중공종')
    var conInspect = getCellByColumnName(outRow,'건축 감리항목')
    console.log(conCategoryCell.displayValue, conCIPCell.displayValue, conInspect.displayValue)
    
});
