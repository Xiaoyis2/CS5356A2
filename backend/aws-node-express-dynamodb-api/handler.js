const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());

app.get("/users/:username", async function (req, res) {
  // const params = {
  //   TableName: USERS_TABLE,
  //   Key: {
  //     username: req.params.username,
  //   },
  // };

  try {
    res.json({"username": "da335" });
    // const { Item } = await dynamoDbClient.get(params).promise();
    // if (Item) {
    //   const { username, name } = Item;
    //   res.json({ username, name });
    // } else {
    //   res
    //     .status(404)
    //     .json({ error: 'Could not find user with provided "username"' });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});

app.post("/users", async function (req, res) {
  const { username, name } = req.body;
  if (typeof username !== "string") {
    res.status(400).json({ error: '"username" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      username: username,
      // name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ username, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
