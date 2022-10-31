const dns = require("node:dns");

var hostname = "codepurple.in";
dns.lookup(hostname, (err, value, family, records) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(value);
  console.log(family);
  console.log(records);
});
