const helper = require("./helper");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const requestify = require("requestify");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var body = [];
requestify
  .request("https://oaosman84.github.io/statics/mock_transaction_data", {
    method: "GET",
  })
  .then(function (response) {
    body = response.getBody();
  })
  .fail(function (response) {
    console.log("Response Error", response.getCode());
  });

app.get("/getJan2029", (req, res) => {
  var list = helper.getJan2029(body);
  // res.json({ :  });
});

app.get("/getTotal", (req, res) => {
  var total = helper.getTotal(body);
  res.json({ total: total });
});

app.get("/getPrecentage", (req, res) => {
  var percentage = helper.getPrecentage(body);
  res.json({ percentage: percentage });
});
