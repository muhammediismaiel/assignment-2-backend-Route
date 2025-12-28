const Path = require("node:path");
const Fs = require("node:fs");
//! first task
function printPath() {
  console.log({
    File: __filename,
    Dir: __dirname,
  });
}
// printPath();

//! secound task
function getName(path) {
  let str1 = path.slice(path.lastIndexOf("/") + 1);
  console.log(str1);
}
// getName("c:/img/aa.txt")

//! third task
function buildObj(dir, name) {
  console.log(dir + name);
}
// buildObj("/file","/aa.exe")
//!forthTask
function returnExt(path) {
  console.log(path.slice(path.lastIndexOf(".")));
}
// getName("c:/img/aa.txt");
