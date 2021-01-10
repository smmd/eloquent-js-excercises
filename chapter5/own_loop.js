function loop(number, compare, next, body) {
  for (let n = number; compare(n); n = next(n)) {
    body(n);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
