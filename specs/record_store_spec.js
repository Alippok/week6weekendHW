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

});