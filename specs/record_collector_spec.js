var assert = require('chai').assert;
var RecordCollector = require('../record_collector.js');
var RecordStore = require('../record_store.js')
var Record = require('../record.js')

var recordCollector1 = new RecordCollector("Joe Bloggs")

var record1 = new Record("Kill Em All", "Metallica", 9.99, "Heavy Metal");
var record2 = new Record("Reload", "Metallica", 11.99, "Heavy Metal");
var record3 = new Record("Amazing Things", "Runrig", 8.99, "Soft Rock");
var record4 = new Record("The Corries Greatest Hits", "The Corries", 15.99, "Folk");
var record5 = new Record("Absolution", "Muse", 8.99, "Rock");
var record6 = new Record("Now 87", "Various", 12.99, "Pop");
var record7 = new Record("Never Been Better", "Olly Murs", 6.99, "Pop");
var record8 = new Record("Led Zeppelin", "Led Zeppelin", 6.99, "Blues/rock");

describe("Record Collector", function(){

  it("should have a name", function(){
    assert.equal("Joe Bloggs", recordCollector1.name);
  });

  it("should begin with an empty records holder", function(){
    assert.equal(0, recordCollector1.recordsHolder.length);
  });

  it("should have a balance", function(){
    assert.equal(350, recordCollector1.balance);
  });

  it("should be able to add a record to its holder", function(){
    //I kind of want this to be a method that cannot be called without paying for the record 
    //first??
    recordCollector1.addRecord(record1)
    assert.deepEqual([record1], recordCollector1.recordsHolder )
  });






});