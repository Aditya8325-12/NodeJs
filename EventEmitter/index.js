const EvenEmiter = require("events");

const eventmitter = new EvenEmiter();

const myfunction = () => {
  console.log("function will call");
};
const myfunction2 = () => {
  console.log("function will call");
};

eventmitter.on("callFuction", myfunction);
eventmitter.on("callFuction2", myfunction2);

eventmitter.setMaxListeners(1);

console.log(eventmitter.getMaxListeners());
eventmitter.emit("callFuction");
eventmitter.emit("callFuction2");

