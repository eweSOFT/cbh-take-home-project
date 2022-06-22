const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  //const TRIVIAL_PARTITION_KEY = "0"; not relevant
  //const MAX_PARTITION_KEY_LENGTH = 256; not relevant
  let candidate = "0";

  if (event || event ===0) { //I noticed when zero (0) is passed as value to the function, event was assumed to be false. Whereas, zero (0) is a value in itself just as any digit number that may be hashed. 
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  /*if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
      console.log(candidate)
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }*/
 
  // Logically, if candidate variable has value (is true), it would have been hashed and the data type will be string hence; the else part will always be true. The else part is then not necessary since we could have set the value of candidate variable to zero (0) at the beginning to conserve memory.


 /* if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }*/
  
  // There may not be any need for the above because, for the length of candidate to be more than 256, it must have been hashed. Hashing it again makes no difference.
  
  return candidate;
};