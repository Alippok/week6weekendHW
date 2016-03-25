


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
  },

  searchByRecordTitle: function(title){
    var list = this.inventory()
    var result 
    list.forEach(function(record){
      if (record.title === title){
        result = record;
      } else {
        return "No record with that title"
      };
    });
    return result
  }


};







module.exports = RecordStore