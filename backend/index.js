const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();

// alowing cross origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// importng Routes
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const postCommentRoute = require("./routes/postCommentRoute");
const ModeratorRoute = require("./routes/ModeratorRoute");
//caliing routes Middelwares
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", postCommentRoute);
app.use("/moderator", ModeratorRoute);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
