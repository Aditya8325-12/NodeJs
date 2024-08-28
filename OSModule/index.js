const osmodule = require("os");
const { json } = require("stream/consumers");

console.log("os arch => ", osmodule.arch());

console.log("free Memory =>", osmodule.freemem());

console.log("total Memory=>", osmodule.totalmem());

console.log("tempary directory=>", osmodule.tmpdir());

console.log("hostname =>", osmodule.hostname());

console.log("os type => ", osmodule.type());

console.log("os platform=>", osmodule.platform());

console.log("os relese vesrion=>", osmodule.release());

console.log(
  "network interface => ",
  JSON.stringify(osmodule.networkInterfaces())
);

console.log("os endness ", osmodule.endianness());
