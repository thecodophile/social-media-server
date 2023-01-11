const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/PostsRouter");
const morgan = require("morgan");

dotenv.config("./.env");

const app = express();

// middlewars
app.use(express.json());
app.use(morgan("common"));

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.get("/", (req, res) => {
  res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

dbConnect();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// kyhEzCeL8L6tHx7o
