


var RecordCollector = function(name){
  this.name = name;
  this.recordsHolder = [];
  this.balance = 350;
};


RecordCollector.prototype = {
  addRecord: function(record){
    this.recordsHolder.push(record);
  }
}



module.exports = RecordCollector;