# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
  `if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
      console.log(candidate)
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }`

 Logically, if candidate variable has value (is true), it would have been hashed and the data type will be string hence; the else part will always be true. The else part is then not necessary since we could have set the value of candidate variable to zero (0) at the beginning to conserve memory.
  
 `if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }`

  There may not be any need for the above because, for the length of candidate to be more than 256, it must have been hashed. Hashing it again makes no difference.