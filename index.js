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
// getName("c:/img/aa.txt");
