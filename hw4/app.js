//////////////1
function getPrice(num1, num2) {
  let solution = (num1 * num2) / 100;
  let result = num1 - solution;
  return result;
}
console.log(getPrice(1000, 50));

//////////////2
function capitalizeString(str) {
  let word = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return word;
}
console.log(capitalizeString("ЕВГЕНИЙ"));

//////////////3
function getRatingStars(star) {
  if (star >= 1 && star <= 5) {
    return "★".repeat(star);
  } else {
    return "";
  }
}
console.log(getRatingStars(5));
console.log(getRatingStars(2));
console.log(getRatingStars(10));
console.log(getRatingStars(-5));
