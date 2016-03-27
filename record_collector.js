


var RecordCollector = function(name){
  this.name = name;
  this.recordsHolder = [];
  this.balance = 350;
};


RecordCollector.prototype = {
  addRecord: function(record){
    this.recordsHolder.push(record);
  },
  
  lookUp: function(title, recordStore){
    var result = recordStore.searchByRecordTitle(title);
    return result.pop();
  },

  priceOfRecord: function(title, recordStore){
    var record = this.lookUp(title, recordStore);
    return record.price;
  }
  


}



module.exports = RecordCollector;