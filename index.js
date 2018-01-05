function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    var m = musicians[i];
    var i = instruments[i];
    array.push(`${m} plays ${i}`)
  }
  return array;
}