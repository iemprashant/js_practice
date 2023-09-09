let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.last = function () {
  if (this.length == 0) return -1;
  return this[this.length - 1];
};

console.log(arr.last());
