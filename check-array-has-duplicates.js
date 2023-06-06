  function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
  }
  
  var validate = ['column','row','value'];
  checkIfDuplicateExists(validate); //false
  
   var validate = ['row','row','value'];
  checkIfDuplicateExists(validate); //true
