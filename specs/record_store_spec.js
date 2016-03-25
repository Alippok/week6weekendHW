var assert = require('chai').assert;
var RecordStore = require('../record_store.js');
var Record = require('../record.js');


var recordStore1 = new RecordStore("Spinners Records Ltd.", "Edinburgh");

var record1 = new Record("Kill Em All", "Metallica", 9.99, "Heavy Metal");
var record2 = new Record("Reload", "Metallica", 11.99, "Heavy Metal");
var record3 = new Record("Amazing Things", "Runrig", 8.99, "Soft Rock");
var record4 = new Record("The Corries Greatest Hits", "The Corries", 15.99, "Folk");
var record5 = new Record("Absolution", "Muse", 8.99, "Rock");
var record6 = new Record("Now 87", "Various", 12.99, "Pop");
var record7 = new Record("Never Been Better", "Olly Murs", 6.99, "Pop");
var record8 = new Record("Led Zeppelin", "Led Zeppelin", 6.99, "Blues/rock");

describe("Record Store", function(){
  it("should have a name", function(){
    assert.equal("Spinners Records Ltd.", recordStore1.name);
  });

  it("should have a city location", function(){
    assert.equal("Edinburgh", recordStore1.city);
  });

  it("should have a records holder", function(){
    assert.deepEqual([], recordStore1.recordsHolder)
  })

  it("should have a balance", function(){
    assert.equal(400, recordStore1.balance)
  })

  it("should be able to add a record", function(){
    recordStore1.addRecord(Record, "Kill Em All", "Metallica", 9.99, "Heavy Metal");
    assert.deepEqual([record1], recordStore1.recordsHolder);
  });

  it("should be able to hold multiple records", function(){
    recordStore1.addRecord(Record, "Reload", "Metallica", 11.99, "Heavy Metal");
    recordStore1.addRecord(Record, "Amazing Things", "Runrig", 8.99, "Soft Rock");
    recordStore1.addRecord(Record, "The Corries Greatest Hits", "The Corries", 15.99, "Folk");
    recordStore1.addRecord(Record, "Absolution", "Muse", 8.99, "Rock");
    recordStore1.addRecord(Record, "Now 87", "Various", 12.99, "Pop");
    recordStore1.addRecord(Record, "Never Been Better", "Olly Murs", 6.99, "Pop");
    recordStore1.addRecord(Record, "Led Zeppelin", "Led Zeppelin", 6.99, "Blues/rock");
    assert.deepEqual([record1, record2, record3, record4, record5, record6, record7, record8], recordStore1.recordsHolder);
  });

  it("should be able to list all records in store", function(){
    assert.deepEqual([record1, record2, record3, record4, record5, record6, record7, record8], recordStore1.inventory());
  });

  it("should not permanently remove items from records holder after invoking inventory function", function(){
    recordStore1.inventory();
    assert.deepEqual([record1, record2, record3, record4, record5, record6, record7, record8], recordStore1.recordsHolder);
  });

  it("should have a checker to return a successfull search result ", function(){
      successfullResult = [record1];
      failedresult = "No record with that title"
      assert.deepEqual([record1], recordStore1.resultChecker(successfullResult, failedresult))
  })

  it("should return failed result if successfullResult is empty", function(){
      successfullResult = [];
      failedresult = "No record with that title"
      assert.equal(failedresult, recordStore1.resultChecker(successfullResult, failedresult))
  })

  it("should be able to retrieve a record by title", function(){
    assert.deepEqual([record2], recordStore1.searchByRecordTitle("Reload"));
  });

  it("should return a message if record title is not found", function(){
    assert.equal("No record with that title", recordStore1.searchByRecordTitle("Changes"));
  });

  it("should be able to retrieve all records by a specific artist", function(){
    assert.deepEqual([record1, record2], recordStore1.searchByRecordArtist("Metallica"));
  });

  it("should be able to retrieve all records by a specific artist", function(){
    assert.deepEqual([record3], recordStore1.searchByRecordArtist("Runrig"));
  });

  it("should return a message if there is no records by given artist", function(){
    assert.deepEqual("Found no records by that artist", recordStore1.searchByRecordArtist("Take That"));
  });

  it("should be able to retrieve all records of a specific genre", function(){
    assert.deepEqual([record6, record7], recordStore1.searchByRecordGenre("Pop"));
  });

  it("should return a message if no records with specific genre are in the store", function(){
    assert.equal("No records with that genre", recordStore1.searchByRecordGenre("Electro Pop")
      );
  });

  it("should be able to remove a record from it's records holder", function(){
    recordStore1.removeRecord("Kill Em All")
    assert.deepEqual([record2, record3, record4, record5, record6, record7, record8], recordStore1.recordsHolder);
  });

  it("should return a message if record to be removed cannot be found", function(){
    recordStore1.removeRecord("Kill Em All")
    assert.deepEqual("No record with that title", recordStore1.removeRecord("Kill Em All"));
  });

  it("should return a removed record as an object", function(){
    assert.deepEqual([record2], recordStore1.removeRecord("Reload"))
  });

  it("should be able to sell a record which adds the record's price to the balance", function(){
    recordStore1.sellRecord("Absolution")
    assert.equal(408.99, recordStore1.balance);
  });

  it("should be able to sell a record and the record should be removed from the store", function(){
    recordStore1.sellRecord("The Corries Greatest Hits");
    assert.deepEqual([record3, record6, record7, record8], recordStore1.recordsHolder);
  });

  it("should have a sum function", function(){
    assert.equal(15, recordStore1.sum([1,2,3,4,5]))
  })

  it("should be able to calculate total value of records in stock", function(){
    assert.equal(35.96, recordStore1.stockValue())
  });
});