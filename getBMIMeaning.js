const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  //code here
  return bmi = weight/(height*height);
}
function getBMIMeaning(weight, height) {
  //code here
 if (calculateBMI < 18.5)  {
  return "Underweight"
} else if (calculateBMI >= 18.5 && calculateBMI <=24.9) {
  return "Normal weight"
} else {
  return "Overweight"
}
}


module.exports = getBMIMeaning
