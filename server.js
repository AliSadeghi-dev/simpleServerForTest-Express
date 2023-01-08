const express = require("express");
const postRoutes = require("./routes/posts");

const app = express();
app.use("/posts", postRoutes);

app.listen(5000, console.log("server is runing on port 5000"));