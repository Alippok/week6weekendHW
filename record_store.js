


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
    if (result1.length > 0){
      return result1;
    } else {
      return result2;
    };
  },
  searchByRecordTitle: function(title){
    var list = this.inventory(); //made a list so I can then search this list with a user 
    //defined query
    var failedResult;
    var successfullResult = [];

    
    list.forEach(function(record){
      // console.log(title);
      // console.log(record.title);
      // console.log(record)
      if (record.title === title){
        successfullResult.push(record);
      } else {
        failedResult = "No record with that title";
      };
    });
    
    return this.resultChecker(successfullResult, failedResult);
  },

  searchByRecordArtist: function(artist){
    var list = this.inventory();
    var failedResult;
    var successfullResult = [];

    list.forEach(function(record){
      if(record.artist == artist){
        successfullResult.push(record);
      } else {
        failedResult = "Found no records by that artist";
      };

    });
    return this.resultChecker(successfullResult, failedResult);
  },

  searchByRecordGenre: function(genre){
    var list = this.inventory();
    var failedResult;
    var successfullResult = [];//using this alot! Could refactor into one function and then 
    //pass in any of the specific search functions.

    list.forEach(function(record){
      if (record.genre === genre){
        successfullResult.push(record);
      } else {
        failedResult = "No records with that genre";
      };

    });
    return this.resultChecker(successfullResult, failedResult);    
  },
  
  removeRecord: function(title){

    var removedRecord = []
    var failedResult 
    this.recordsHolder.forEach(function(record){
      if (record.title === title){
        var index = this.recordsHolder.indexOf(record)
        var tempRecordHolder = this.recordsHolder.splice(index, 1)
        removedRecord.push(tempRecordHolder.pop())//Added this bit in to avoid an array within
        //an array
      } else {
        failedResult = "No record with that title"
      };
    }.bind(this));
    
    return this.resultChecker(removedRecord, failedResult);
  },

  sellRecord: function(title){
    this.recordsHolder.forEach(function(record){
      if (record.title === title){
        this.balance += record.price
        removedRecord = this.removeRecord(title)
      }
    }.bind(this));
  }


};







module.exports = RecordStore