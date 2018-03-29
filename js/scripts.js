// Business logic

var romanNumTranslator = function(str){
  var arrOfNumbers = str.split("");
  var romanNumerals = ["I","V","X","L","C","D","M"];
  if (arrOfNumbers.length > 4){
    alert("You cannot count higher than 3,999 in Roman numerals");
    return;
  }else if (arrOfNumbers.length == 1){
    if (arrOfNumbers[0] === '1' || arrOfNumbers[0] === '2' || arrOfNumbers[0] === '3') {
      var i = arrOfNumbers[0];
      arrOfNumbers[0] = romanNumerals[0];
      while (i != 1){
        arrOfNumbers[0] = arrOfNumbers + romanNumerals[0];
        i --;
      }
      return arrOfNumbers.join("");
    } else if (arrOfNumbers[0] === '4'){
        arrOfNumbers[0] = romanNumerals[0] + romanNumerals[1];
        return arrOfNumbers.join("");
    }
  }
}
