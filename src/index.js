module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let brackets = [], pair = [];
  for(let i = 0; i < bracketsConfig.length; i++) {
     pair [i] = bracketsConfig[i][1];
    }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === brackets[brackets.length - 1]) {
        brackets.pop();
      } else {
        brackets.push(pair[arr[i]]);
      }
      
    }
    if(brackets.length == 0) {
      return true;
    } else {
      return false;
    }
  }
