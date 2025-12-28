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
  console.log(Path.basename(path));
}
// getName("c:/img/aa.txt")

//! third task
function buildObj(dir,name){
    console.log(dir+name);
}
// buildObj("/file","/aa.exe")