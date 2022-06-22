const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  let candidate = "0";

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  return candidate;
};