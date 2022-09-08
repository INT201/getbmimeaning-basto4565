const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  //code here
  bmi = weight/(height*height)
  return calculateBMI;
}
function getBMIMeaning(weight, height) {
  //code here
 if (bmi < 18.5)  {
  return "Underweight"
} else if (bmi >= 18.5 && bmi <=24.9) {
  return "Normal weight"
} else if (bmi > 25.0) {
  return "Overweight"
}
}


module.exports = getBMIMeaning
