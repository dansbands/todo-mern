const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "variables.env" });
// const db = require('db')

const { ObjectId } = require("mongodb");

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

    app.get("/todo/:id", (req, res) => {
      console.log("GET ONE!!!", req.params.id);
      const id = req.params.id;
      const cursor = db
        .collection("todos")
        .findOne({ _id: ObjectId(id) })
        // .toArray()
        .then((results) => {
          console.log({results});
          res.send(results);
        });
    });

    app.post("/todos", (req, res) => {
      console.log("body", req.body);
      todoCollection
        .insertOne(req.body)
        .then((result) => {
          res.send(200);
        })
        .catch((error) => console.error(error));
    });

    app.put("/todo/:id/edit", (req, res) => {
      console.log("PUT!!!", req.params.id);
      console.log("BODY!!!", req.body);
      todoCollection
        .findOneAndUpdate(
          { _id: ObjectId(req.params.id) },
          {
            $set: {
              userId: req.body.userId,
              title: req.body.title,
              completed: req.body.completed,
              description: req.body.description,
            },
          }
        )
        .then((result) => {
          console.log("result", result);
          res.json(`Updated ${req.params.id}`);
        })
        .catch((error) => console.log("Error", error));
    });

    app.put("/todo/:id/complete", (req, res) => {
      console.log("PUT!!!", req.params.id);
      console.log("BODY!!!", req.body);
      todoCollection
        .findOneAndUpdate(
          { _id: ObjectId(req.params.id) },
          {
            $set: {
              completed: req.body.completed,
            },
          }
        )
        .then((result) => {
          console.log("result", result);
          res.json(`Updated ${req.params.id}`);
        })
        .catch((error) => console.log("Error", error));
    });

    app.delete("/todo/:id", (req, res) => {
      console.log("DELETE!!!", req.params.id);
      console.log("BODY!!!", ObjectId(req.params.id));
      todoCollection
        .deleteOne(
          { _id: ObjectId(req.params.id) }
        )
        .then((result) => {
          res.json(`Deleted ${req.params.id}`);
        })
        .catch((error) => console.log("Error", error));
    });
  })

  .catch((error) => console.log("ERROR!!!", error));
