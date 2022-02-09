# Array#splice vs Array#slice

* ⛔️ `Array#splice` — MUTATE a list
* ✅ `Array#slice` — doesn't MUTATE a list

```js
// Example unit test based on AVA
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
```

More examples are in [test.js](https://github.com/piecioshka/splice-vs-slice/blob/master/test.js) file.
