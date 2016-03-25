


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

  resultChecker: function(result1, result2){
    if (result1){
      return result1;
    } else {
      return result2;
    };
  },
  searchByRecordTitle: function(title){
    var list = this.inventory();
    var failedResult;
    var successfullResult;

    
    list.forEach(function(record){
      // console.log(title);
      // console.log(record.title);
      // console.log(record)
      if (record.title === title){
        successfullResult = record;
      } else {
        failedResult = "No record with that title";
      };
    });
    
    return this.resultChecker(successfullResult, failedResult)
  },

  searchByRecordArtist: function(artist){
    var list = this.inventory();
    var failedResult;
    var successfullResult = [];

    list.forEach(function(record){
      if(record.artist == artist){
        successfullResult.push(record);
      } else {
        failedResult = "Found no records by that artist"
      };

    });

    return this.resultChecker(successfullResult, failedResult)

  }



};







module.exports = RecordStore