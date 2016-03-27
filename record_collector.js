


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
    return result;
        
  },

  priceOfRecord: function(title, recordStore){
    var result = this.lookUp(title, recordStore);
    record = result.pop();
    return record.price;
  }
  


}



module.exports = RecordCollector;