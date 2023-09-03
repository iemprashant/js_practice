// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// ; is used to end the first iife execution

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
