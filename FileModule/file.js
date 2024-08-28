console.log("createing the first node js file ");

const fs = require("fs");

// write the file but while writing the file that time it will be override the data

fs.writeFile("input.txt", "my name is aditya", (err) => {
  if (err) {
    console.log("error for  writing the file ");
  } else {
    console.log("file was writed  succefully");
  }
});

// reading the file from sychronous way

var data = fs.readFileSync("input.txt");
console.log("data => ", data.toString());

// reading the file from asycnchronus funciton

var data = fs.readFile("input.txt", (err, data) => {
  if (err) {
    console.log("error occure while reading the file ");
  } else {
    console.log("data=>", data.toString());
  }
});

// reading the from while first open the file and after open the file it will be the read file

const buf = new Buffer.alloc(1024);
fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("error occure while creating the file ", err);
  } else {
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if (err) {
        console.log("error occure while reading the file");
      } else {
        console.log("data=>", buf.slice(0, bytes).toString());
      }
    });

    fs.close(fd, (err) => {
      if (err) {
        console.log("Error occurred while closing the file:", err);
      } else {
        console.log("File closed successfully.");
      }
    });
  }
});

// write the file in append mode in the append mode there not be overdide the data
fs.appendFile(
  "input.txt",
  "recentley i was completed the my btech degree ",
  (err) => {
    if (err) {
      console.log("error occure while updating the data ");
    } else {
      console.log("succefully update the file ");
    }
  }
);

fs.unlink("input.txt", (err) => {
  if (err) {
    console.log("error while deleting the file ");
  } else {
    console.log("file deleted succefully");
  }
});
