var assert = require('chai').assert;
var RecordCollector = require('../record_collector.js');
var RecordStore = require('../record_store.js')
var Record = require('../record.js')

var recordCollector1 = new RecordCollector("Joe Bloggs")

var recordStore1 = new RecordStore("Vinyl Stores", "Glasgow")

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
    assert.deepEqual([record1], recordCollector1.recordsHolder)
  });

  it("should be able to look up the record store for a specific record", function(){
    recordStore1.addRecord(Record, "Kill Em All", "Metallica", 9.99, "Heavy Metal" )
    recordStore1.addRecord(Record, "Reload", "Metallica", 11.99, "Heavy Metal");
    recordStore1.addRecord(Record, "Amazing Things", "Runrig", 8.99, "Soft Rock");
    recordStore1.addRecord(Record, "The Corries Greatest Hits", "The Corries", 15.99, "Folk");
    recordStore1.addRecord(Record, "Absolution", "Muse", 8.99, "Rock");
    recordStore1.addRecord(Record, "Now 87", "Various", 12.99, "Pop");
    recordStore1.addRecord(Record, "Never Been Better", "Olly Murs", 6.99, "Pop");
    recordStore1.addRecord(Record, "Led Zeppelin", "Led Zeppelin", 6.99, "Blues/rock");

    assert.deepEqual([record2], recordCollector1.lookUp("Reload", recordStore1))
  });

  it("should be able to look up price of searched record", function(){
    assert.equal(11.99, recordCollector1.priceOfRecord("Reload", recordStore1));
  });

  it("should receive an error message of record searched is not in store", function(){
    assert.equal("No record with that title", recordCollector1.lookUp("Now 90", recordStore1))  
  });

  it("should be able to buy a record", function(){
    recordCollector1.buyRecord("Absolution", recordStore1)//should the collector be taking in 
    //the store or the stor taking in the collectore?

    assert.deepEqual([record1, record5], recordCollector1.recordsHolder )
  });

  it("should take record price from its balance when it buys a record", function(){
    recordCollector1.buyRecord("Led Zeppelin", recordStore1)
    assert.equal(334.02, recordCollector1.balance)
  });





});