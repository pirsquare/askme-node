var assert = require("assert");
var path = require("path");
var Base = require('../lib/base');


function generateBase(options) {
  var awsDataFile = path.normalize("./source/data/aws.json");
  return new Base(awsDataFile, options);
}

describe('Test Base', function() {
  var mock;

  var data = [{
    "id": "a",
    "desc": "a"
  }, {
    "id": "b",
    "desc": "bb"
  }, {
    "id": "cc",
    "desc": "ccc"
  }];

  var columns = ["id", "desc"]

  describe('generateCellsLength', function() {
    it('should generate cells length', function() {
      var base = generateBase({});
      var ret = base.generateCellsLength(data, columns);
      assert.equal(ret['id'], 2);
      assert.equal(ret['desc'], 3);
    });
  });

  describe('generateRowOutput', function() {
    it('should generate default row output', function() {
      var options = {
        "delimiter": " | "
      }

      var base = generateBase(options);
      var cellsLength = base.generateCellsLength(data, columns);
      var ret = base.generateRowOutput(data[0], columns, cellsLength);
      assert.equal(ret, "Id: a  | Description: a  ");

      ret = base.generateRowOutput(data[1], columns, cellsLength);
      assert.equal(ret, "Id: b  | Description: bb ");

      ret = base.generateRowOutput(data[2], columns, cellsLength);
      assert.equal(ret, "Id: cc | Description: ccc");

    });


    it('should generate row output without columns', function() {
      var options = {
        "delimiter": " || ",
        "omitColumns": true
      }

      var base = generateBase(options);
      var cellsLength = base.generateCellsLength(data, columns);
      var ret = base.generateRowOutput(data[0], columns, cellsLength);
      assert.equal(ret, "a  || a  ");

      ret = base.generateRowOutput(data[1], columns, cellsLength);
      assert.equal(ret, "b  || bb ");

      ret = base.generateRowOutput(data[2], columns, cellsLength);
      assert.equal(ret, "cc || ccc");

    });
  });

  it('should generate row output with selected columns', function() {
    var newColumns = ["id"];
    var options = {
      "delimiter": " | ",
      "fields": "id"
    }

    var base = generateBase(options);
    var cellsLength = base.generateCellsLength(data, newColumns);
    var ret = base.generateRowOutput(data[0], newColumns, cellsLength);
    assert.equal(ret, "Id: a ");

    ret = base.generateRowOutput(data[1], newColumns, cellsLength);
    assert.equal(ret, "Id: b ");

    ret = base.generateRowOutput(data[2], newColumns, cellsLength);
    assert.equal(ret, "Id: cc");

  });

});