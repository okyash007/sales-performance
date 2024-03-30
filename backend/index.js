require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { server, wss, app } = require("./WebSocket");
const cors = require("cors");
const userRouter = require("./router/userRoutes");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
// app.use("/product", productRouter);
// app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server is listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

wss.on("connection", function connection(ws) {
  console.log("A new client connected");
  ws.on("message", function incoming(message) {
    console.log("Received message from client:", message);
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

module.exports = { app };

// ----------------------------------------------------------------
