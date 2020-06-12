const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "variables.env" });
// const db = require('db')

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(process.env.DATABASE, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database!!!");
    const db = client.db("mern-todo-app");
    const todoCollection = db.collection("todos");

    app.use(cors());
    app.use(
      express.json({
        type: ["application/json", "text/plain"],
      })
    );
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3001, () => {
      console.log("listening on 3001");
    });

    app.get("/", (req, res) => {
      res.send("Hello World!!!");
    });

    app.get("/todos", (req, res) => {
      const cursor = db
        .collection("todos")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.send(results);
        });
    });

    app.post("/todos", (req, res) => {
      console.log("body", req.body);
      todoCollection
        .insertOne(req.body)
        .then((result) => {
          // console.log(result);
          res.send(200)
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.log(error));
