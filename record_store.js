


var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.recordsHolder = [];
  this.balance = 400;
};

RecordStore.prototype = {
  addRecord: function(callBack, title, artist, price, genre){
    var record = new callBack(title, artist, price, genre)
    this.recordsHolder.push(record)
  },

  inventory: function(){
    var list = [];
    this.recordsHolder.forEach(function(record){
      list.push(record);
    });
    return list;
  }



};







module.exports = RecordStore