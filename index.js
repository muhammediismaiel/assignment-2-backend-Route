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
const Path = require("path");
function getName(path){
    console.log(Path.basename(path));
}
// getName("c:/img/aa.txt")