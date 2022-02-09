const test = require("ava");

test("with zero args", (assert) => {
  const inputForSlice = ["a", "b", "c"];
  const inputForSplice = ["a", "b", "c"];

  // This behavaiour of Array#slice is use to made a shallow copy of array
  assert.deepEqual(inputForSlice.slice(), ["a", "b", "c"]);
  assert.deepEqual(inputForSlice, ["a", "b", "c"]);

  // Array#splice need to have at least one arg, otherwise return empty array
  assert.deepEqual(inputForSplice.splice(), []);
  assert.deepEqual(inputForSplice, ["a", "b", "c"]);
});

test("with one arg", (assert) => {
  const inputForSlice = ["a", "b", "c"];
  const inputForSplice = ["a", "b", "c"];

  // Mutation = off
  assert.deepEqual(inputForSlice.slice(1), ["b", "c"]);
  assert.deepEqual(inputForSlice, ["a", "b", "c"]);

  // Mutation = on
  assert.deepEqual(inputForSplice.splice(1), ["b", "c"]);
  assert.deepEqual(inputForSplice, ["a"]);
});

test("with two args", (assert) => {
  const inputForSlice = ["a", "b", "c"];
  const inputForSplice = ["a", "b", "c"];

  // Mutation = off
  assert.deepEqual(inputForSlice.slice(1, 2), ["b"]);
  assert.deepEqual(inputForSlice, ["a", "b", "c"]);

  // Mutation = on
  assert.deepEqual(inputForSplice.splice(1, 2), ["b", "c"]);
  assert.deepEqual(inputForSplice, ["a"]);
});
