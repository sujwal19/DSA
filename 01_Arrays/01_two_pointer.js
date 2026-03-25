//

//

var isHappy = function (n) {
  let str = n.toString().split("");

  for (let i = 0; i < str.length; i++) {
    str[i] = +str[i] * +str[i];
  }
  return str;
};

console.log(isHappy(19));
