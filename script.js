const isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(23252);

console.log(res);

//  Fibonacci Series

const fibbo = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
};

const fiboNum = fibbo(10);
console.log(fiboNum);
