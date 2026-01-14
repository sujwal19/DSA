let arr = [1, 2, 3, 4];
let numar = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        for (let k = 0; k < arr.length; k++) {
          if (k != i && k != j && arr[k] % 2 == 0) {
            let number = arr[i] * 100 + arr[j] * 10 + arr[k] * 1;
            numar.push(number);
          }
        }
      }
    }
  }
}

console.log(numar);
