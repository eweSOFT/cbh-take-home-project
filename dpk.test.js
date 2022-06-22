const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey(0)", () => {
  it("Returns the hashed value when digit zero (0) is given", () => {
    const n = deterministicPartitionKey(0);
    expect(n).toBeTruthy();
  });
});
