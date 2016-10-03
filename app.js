var express = require("express");
var app = express();

app.use("/dist", express.static("dist"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html", null, function (err) {
    if (err) {
      console.error(err);
      res.status(err.status).end();
      return;
    }
  });
});
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
