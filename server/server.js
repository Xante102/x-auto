const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    console.log(
      "Error in MongoDB connection: ",
      +JSON.stringify(err, undefined, 2)
    );
  } else {
    console.log("Connected to MongoDB Successfully!");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
