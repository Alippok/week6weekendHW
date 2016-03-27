var assert = require('chai').assert;
var RecordCollector = require('../record_collector.js');
var RecordStore = require('../record_store.js')
var Record = require('../record.js')

var recordCollector1 = new RecordCollector("Joe Bloggs")

describe("Record Collector", function(){

  it("should have a name", function(){
    assert.equal("Joe Bloggs", recordCollector1.name);
  });

  it("should begin with an empty records holder", function(){
    assert.equal(0, recordCollector1.recordsHolder.length)
  })






});