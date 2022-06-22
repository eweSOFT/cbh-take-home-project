const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  let candidate = '0';

  if (event) {    
      candidate = crypto.createHash("sha3-512")
        .update(event)
        .digest("hex");    
  }  
  
  return candidate;
};