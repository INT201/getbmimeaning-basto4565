const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  //code here
  return weight / (height*height);
}
function getBMIMeaning(weight, height) {
  //code here
  bmi = calculateBMI
 if (bmi < 18.5)  {
  return "Underweight"
} else if (bmi >= 18.5 && bmi <=24.9) {
  return "Normal weight"
} else {
  return "Overweight"
}
}
module.exports = getBMIMeaning
