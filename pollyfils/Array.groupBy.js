Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    let id = fn(cur);
    if (acc[id]) {
      acc[id].push(cur);
    } else {
      acc[id] = [cur];
    }
    return acc;
  }, {});
};

let array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];

let fn1 = function (item) {
  return item.id;
};

let array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];

let fn2 = function (list) {
  return String(list[0]);
};

console.log(array1.groupBy(fn1));

console.log(array2.groupBy(fn2));
