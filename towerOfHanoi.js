function towerOfHanoi(n, src = "S", helper = "H", des = "D") {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, src, des, helper);
  console.log("Transfer disk " + n + " from " + src + " to " + des);
  towerOfHanoi(n - 1, helper, src, des);
}

towerOfHanoi(3);
