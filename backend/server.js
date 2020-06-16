const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");
const auth = require("./middleware/auth");
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
    const usersCollection = db.collection("users");

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
          // console.log(results);
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
          console.log({ results });
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
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then((result) => {
          res.json(`Deleted ${req.params.id}`);
        })
        .catch((error) => console.log("Error", error));
    });

    // Users Routes

    app.get("/user/:id", (req, res) => {
      console.log("GET ONE!!!", req.params.id);
      const id = req.params.id;
      const cursor = db
        .collection("users")
        .findOne({ _id: ObjectId(id) })
        .then((results) => {
          console.log({ results });
          res.send(results);
        });
    });

    app.post("/signup", async (req, res, next) => {
      // Check existing user
      let user = await usersCollection.findOne({ email: req.body.email });
      if (user)
        return res.status(400).send({ error: "User already registered" });

      console.log("body", req.body);
      user = req.body;
      user.password = await bcrypt.hash(user.password, 10);
      usersCollection
        .insertOne(user)
        .then((result) => {
          const token = jwt.sign(
            { _id: result._id },
            config.get("myprivatekey")
          );
          res.header("x-auth-token", token).send({
            _id: user._id,
            name: user.name,
            email: user.email,
          });
        })
        .catch((error) => console.error(error));
    });

    app.post("/signin", async (req, res) => {
      let user = await usersCollection.findOne({ email: req.body.email });
      let pwMatch = false
      if (user) pwMatch = await bcrypt.compare(req.body.password, user.password);
      if (!user) {
        return res.status(400).send({ error: "User does not exist" });
      } else if (user && pwMatch) {
        const token = jwt.sign({ _id: user._id }, config.get("myprivatekey"));
        // res.send(200);
        res.header("Authorization", token).status(200).send({
          token,
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        });
      } else {
        res
          .status(401)
          .send({ error: "Invalid username and password combination" });
      }
      // const email = req.body.email;
      // const password = req.body.password;
      // const cursor = await db
      //   .collection("users")
      //   .findOne({ email })
      //   .catch((error) => res.send("ERROR!!!", error))
      //   .then((results) => {
      //     console.log({ results });
      //     res.send(results);
      //   });
    });

    // End Users Routes
  })

  .catch((error) => console.log("ERROR!!!", error));
