let n = 100;

let dp = new Array(n + 1).fill(-1);
var fibo = function (n) {
  if (n <= 1) return n;

  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = fibo(n - 1) + fibo(n - 2);
  return dp[n];
};

// console.log(fibo(n));

//
// 0/1 Knapsack Problem
var knabsack = function (wt, val, w, n = wt.length) {
  if (n === 0 || w === 0) return 0;

  if (wt[n - 1] <= w) {
    return Math.max(
      val[n - 1] + knabsack(wt, val, w - wt[n - 1], n - 1),
      knabsack(wt, val, w, n - 1),
    );
  } else if (wt[n - 1] > w) {
    return knabsack(wt, val, w, n - 1);
  }
};
console.log("Knabsack:", knabsack([1, 3, 4, 5], [1, 4, 5, 7], 7));
