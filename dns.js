const dns = require("dns");
const { Resolver } = require('dns').promises;
const resolver = new Resolver();


var hostname = "codepurple.in";
dns.lookup(hostname, (err, value, family) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(value);
  console.log(family);
});
dns.resolveTxt("codepurple.in", (err, addresses) =>
  console.log("TXT records: %j", addresses)
);
resolver.resolve4('example.org').then((addresses) => {
  console.log(addresses)
  // ...
});