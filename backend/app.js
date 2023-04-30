const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
const cors = require("cors");
require("./connection/conn")

app.use(cors());
app.use(express.json());
app.use("/bookapi", bookRoute);

app.listen(5000, () => {
    console.log("server started");
});