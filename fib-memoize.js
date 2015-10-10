function fib(n) {
  if(n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function fibMemo(n) {
  fibMemo[n] = fibMemo[n] || fibMemo(n - 1) + fibMemo(n - 2);
  return fibMemo[n]
}
fibMemo[0] = 0;
fibMemo[1] = 1;
fibMemo[2] = 1;

console.time('fib');
console.log(fib(20));
console.time('fib');

console.time('fibMemo');
console.log(fibMemo(20));
console.time('fibMemo');
