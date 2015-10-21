var fs = require("fs");
var columnsMapper = {
  "id": "Id",
  "desc": "Description",
}


function Base(dataFile, options) {
  if (!(this instanceof Base)) {
    throw new TypeError("Base constructor cannot be called as a function.");
  }

  this.data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  this.delimiter = options.delimiter;
  this.omitColumns = options.omitColumns;

  // fields to output
  if (options.fields) {
    this.fields = options.fields.split(',');
  } else {
    // output every fields by default
    this.fields = Object.keys(columnsMapper);
  }
}


Base.prototype = {
  constructor: Base,

  // Return dict mapping column to max cell length for that column. For example:
  // {
  // 	"id": 20,
  // 	"desc": 30,
  // }
  generateCellsLength: function(data, columns) {
    var cellsLength = {};
    var column;
    var row;

    for (var i = 0; i < data.length; i++) {
      row = data[i];

      for (var j = 0; j < columns.length; j++) {
        column = columns[j];

        if (cellsLength[column]) {
          if (row[column].length > cellsLength[column]) {
            cellsLength[column] = row[column].length;
          }
        } else {
          cellsLength[column] = row[column].length;
        }
      }
    }

    return cellsLength;
  },


  render: function(data, fieldName) {
    var cellsLength = this.generateCellsLength(data, this.fields);
    for (var i = 0; i < data.length; i++) {
      this.renderRow(data[i], this.fields, cellsLength);
    }
  },


  renderRow: function(row, columns, cellsLength) {
    console.log(this.generateRowOutput(row, columns, cellsLength));
  },


  generateRowOutput: function(row, columns, cellsLength) {
    var output = "";
    var column;

    for (var i = 0; i < columns.length; i++) {
      column = columns[i];

      // Column output
      if (!this.omitColumns) {
        output += columnsMapper[column] + ": ";
      }

      // Field output
      // To ensure evenly spaced cells we will add empty spaces to each cells until
      // it has the same length as the biggest cell for a given column
      output += row[column] + " ".repeat(cellsLength[column] - row[column].length);

      // Delimiter output. don't output delimiter for last column
      if (i !== columns.length - 1) {
        output += this.delimiter;
      }
    }

    return output;
  },

};


module.exports = Base;