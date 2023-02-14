const express = require("express");
const productRoutes = require("./routes");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://connect:connect@mongodbtutorial.6kryd.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // serverApi: ServerApiVersion.v1,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

// CONSTANTS
const PORT = 8888;
const HOST = "0.0.0.0";

// APP
const app = express();
app.use(express.json()); // bodyParser 대체 (express 4.16.0 이후부터)
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
