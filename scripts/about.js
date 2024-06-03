//Read a file with the help of node js file
//file.html
//node.js

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("file.html", function (err, data) {
      res.write(data);
      return res.end();
    });
  })
  .listen(5000);

//URL method

var http = require("http");
var url = require("url");
var link = "https://www.google.com";
var q = url.parse(link, true);
http
  .createServer(function (req, res) {
    req.writeHead(200, { "Content-Type": "text/html" });
    console.log(q.hostname());
    req.end();
  })
  .listen(8000);

// File Server ke methods

// fs.readFile, fd.writeFile, fs.updateFile, fs.open , fs.unlink,

var fs = require("fs");
fs.open("file1.html", function (err, data) {
  if (err) {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  }
});

var fs = require("fs");
fs.unlink("file1.html", "Hey there!", function (err, data) {
  if (err) {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  }
});

//Events => instance => EventEmitter

var events = require("events");
var eventEmitter = require("eventEmitter");

var myEventHandler = function () {
  console.log("I am going to handle all the events");
};

eventEmitter.on("scream", myEventHandler);
eventEmitter.fire("scream");

//Formidable => Node.js me file upload krne ke liye

// npm i formidable

var formidable = require("formidable");
var http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<form action="fileupload" name="fileupload">');
  res.write('<input type="file" name="formtoupload">');
  res.write('<input type="submit">');
  res.write("</form>");
  return res.end();
});

var formidable = require("formidable");
var http = require("http");
http
  .createServer(function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (req == "/fileupload") {
        res.write("File Uploaded");
        return res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<form action="fileupload" name="fileupload">');
        res.write('<input type="file" name="formtoupload">');
        res.write('<input type="submit">');
        res.write("</form>");
        return res.end();
      }
    });
  })
  .listen(4000);

//Events in node.js
// We can create, fire and listen events
// In order to work with events, we need eventEmitter which is the object
// and events are the instance of the eventEmitter

var events = require("events");
var eventEmitter = require("eventEmitter");
const { resolve } = require("path");
const { rejects } = require("assert");
const { clearCache } = require("ejs");
const { setTimeout } = require("timers/promises");
const { response } = require("express");
var myEventHandler = function () {
  console.log("I can hear the scream from there");
};
eventEmitter.on("screams", myEventHandler);
eventEmitter.emit("screams");

//Promises

function fetchData() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      var data = { name: "Tisha", age: 19 };
      var isError = False;

      if (isError) {
      }
    }, 3000);
  });
}

//async await function
//async mtlb asynchronous , and ye await ko use krne ke liye function ko lgana
// padta hai
// async await use krne se humare task jab tak complete nhi hota tab tak aage
// badhega

// Promises, async, await, callback, callback hell

// -> Callback Function ??
// Ek function ke andar dusre function ko bulana is callback .

// -> Callback hell ??
// Ek function ke andar bohot saare functions ko bula dena is Callback hell

// -> Promises ??
// Its like a promise we make in real life, ki jab tab ye nhi hoga tab tak
// hum aage nhi badhenge ... ye vo kaam ko krta hai even though thoda time leker
// krega but krega

// -> async ??
// Async in normal words asynchronous funtions me use hota hai and isko hum
// await keyword use kr paye isliye function ke pehle likh dete hai

// -> await ??
// await jis chiz ko hume pehle krvana hai us chiz ke pehle rakhte hai, so that
// vo kaam pehle ho jaye and baadme uske aage ke chiz work kre.

// Javascript is a actual programming language
// nodejs is a runtime environment and a js library

//What is v8 engine ??
// V8 engine is an engine developed by google and it is used
// in order to make the execution of the javascript code faster
// so the question is where node.js comes in the picture right ?
// so node.js is used to write js code in the server side and

//-> What is Event loop in node.js??
// So when we say that node.js is a single threaded program
// which is used to execute multiple task, we actually talk about
// event loop..
// Event loop is responsible for keeping an eye on task and execute
// them when they are ready
// it maintains a kind of queue, where it will keep the tasks that
// takes time to execute, for ex fetching data, reading files
// then it will execute the ones that are ready first..
// In simple words, event loop is like the manager of executing the
// tasks in node.js.

// Database         ✅
// Collections      ✅
// Documents         ✅
// find             ✅
// Queries          ✅
// CRUD operations

//MongoDB Connection with node.js
// npm i mongodb
//var mongo = require('mongodb');

var mongoClient = require("mongodb").mongoClient;
var url = "mongodb://localhost:27017/mydb/mydb";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  else {
    console.log("Database Created");
    db.close();
  }
});

// MongoDB Collection creation

var mongoClient = require("mongodb").mongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  else {
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, db) {
      if (err) throw err;
      else {
        console.log("Collection Created");
        db.close();
      }
    });
  }
});

// Even though humne database and ek collection bana liya hai fir bhi hume ye sab humare mongodb
// pr nhi dikhega .. bcoz as per the rule atleast one query hona chahiye humare collection me
// tab hi humara sab kaam mongodb pr dikhega okay ??

// Insert documents into mongodb

var mongoClient = require("mongodb").mongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var obdb = db.db("mydb");
  var mydoc1 = [
    { name: "Tisha Verma", Age: "20" },
    { name: "Shruti Verma", Age: "20" },
    { name: "Shweta Verma", Age: "20" },
    { name: "Manju Verma", Age: "20" },
    { name: "Krishna Verma", Age: "20" },
  ];
  db.collection("customers").insertMany(mydoc1, function (err, db) {
    if (err) throw err;
    else {
      console.log("Inserted Multiple document");
      db.close();
    }
  });
});

//FindOne or FindMany methods

var mongoClient = require("mongodb").mongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { name: "Tisha Verma" };
  dbo
    .collection("customers")
    .find({ query })
    .toArray(function (err, result) {
      if (err) throw err;
      else {
        console.log(result.name);
        db.close();
      }
    });
});

// Drop method

var mongoClient = require("mongodb").mongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  else {
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function (err, delOk) {
      if (err) throw err;
      if (delOk) {
        console.log("Collection deleted");
        db.close();
      }
    });
  }
});
