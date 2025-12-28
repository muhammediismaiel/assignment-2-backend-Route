const Path = require("node:path");
const Fs = require("node:fs");
const EventEmitter = require("node:events");
const Os = require("node:os");

//! first task
function printPath() {
  console.log({
    File: __filename,
    Dir: __dirname,
  });
}
// printPath();

//! second task
function getName(path) {
  let str1 = path.slice(path.lastIndexOf("/") + 1);
  console.log(str1);
}
// getName("c:/img/aa.txt");

//! third task
function buildObj(dir, name) {
  console.log(dir + name);
}
// buildObj("/file","/aa.exe");

//! fourth task
function returnExt(path) {
  console.log(path.slice(path.lastIndexOf(".")));
}
// returnExt("c:/img/aa.txt");

//! fifth task (name + ext)
function parseNameAndExt(path) {
  console.log({
    Name: Path.basename(path, Path.extname(path)),
    Ext: Path.extname(path),
  });
}
// parseNameAndExt("/home/app/main.js");

//! sixth task (check absolute path)
function isAbsolutePath(path) {
  console.log(Path.isAbsolute(path));
}
// isAbsolutePath("/home/user/file.txt");

//! seventh task (join multiple segments)
function joinSegments(...segments) {
  console.log(Path.join(...segments));
}
// joinSegments("src", "components", "App.js");

//! eighth task (resolve relative path)
function resolvePath(relativePath) {
  console.log(Path.resolve(relativePath));
}
// resolvePath("./index.js");

//! ninth task (join two paths)
function joinTwoPaths(path1, path2) {
  console.log(Path.join(path1, path2));
}
// joinTwoPaths("/folder1", "folder2/file.txt");

//! tenth task (delete file async)
function deleteFileAsync(path) {
  Fs.unlink(path, (err) => {
    if (err) return console.log(err);
    console.log("The file.txt is deleted.");
  });
}
// deleteFileAsync("/path/to/file.txt");

//! eleventh task (create folder sync)
function createFolderSync(folderPath) {
  Fs.mkdirSync(folderPath, { recursive: true });
  console.log("Success");
}
// createFolderSync("./newFolder");

//! twelfth task (event emitter start)
const emitter = new EventEmitter();
emitter.on("start", () => {
  console.log("Welcome event triggered!");
});
// emitter.emit("start");

//! thirteenth task (login event)
emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});
// emitter.emit("login", "Ahmed");

//! fourteenth task (read file sync)
function readFileSyncExample(path) {
  const data = Fs.readFileSync(path, "utf8");
  console.log(data);
}
// readFileSyncExample("./notes.txt");

//! fifteenth task (write file async)
function writeFileAsync(path, content) {
  Fs.writeFile(path, content, (err) => {
    if (err) return console.log(err);
    console.log("Async save");
  });
}
// writeFileAsync("./async.txt", "Async save");

//! sixteenth task (check if exists)
function checkExists(path) {
  console.log(Fs.existsSync(path));
}
// checkExists("./notes.txt");

//! seventeenth task (OS info)
function getOSInfo() {
  console.log({
    Platform: Os.platform(),
    Arch: Os.arch(),
  });
}
// getOSInfo();
