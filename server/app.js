const express = require("express");
const app = express(); // create express app
const path = require("path");
const port = process.env.PORT || 5000;
const server = require("http").Server(app);
const fetch = require("node-fetch");
const cors = require("cors");
// const bodyParser = require("body-parser");
// const { info } = require("console");
// const { parse } = require("path");
// const admin = require("firebase-admin");
// const db = admin.database();
// const ref = db.ref("server/saving-data/fireblog");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors);

app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});
app.get("/api/greeting", (req, res) => {
  const upsId = req.query.upsId || "";
  res.setHeader("Content-Type", "application/json");
  const url = "https://wwwcie.ups.com/track/v1/details/";
  // ?locale=en_US";
  const headers = {
    AccessLicenseNumber: "6D8811C98EB6B651",
    ContentType: "application/json",
    Accept: "application/json",
  };

  const getUpsData = function (resp) {
     const endpoint = "?locale=en_US"
     fetch(url + upsId + endpoint, { headers: headers })
      .then(function (data) {
        return data.json();
      })
      .then(function (parsed) {
        console.log(parsed);
        let trackResponse = parsed["trackResponse"];
        console.log(trackResponse)
        // let shipment = parsed.trackResponse["shipment"];
        // console.log("ship => " + shipment)
        // let UpsPackage = shipment[0];
        // console.log("package => " + UpsPackage)
        // let activity1 = shipment.activity;
        // let deliveryDate = activity[0];
        // console.log(deliveryDate)
        let allData = [
          parsed,
          trackResponse,
          // shipment,
          // UpsPackage,
          // activity1,
          // deliveryDate,
        ];
        resp(allData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // getUpsData(function (resp) {
  //   res.send(resp);
  // });
  getUpsData(function (resp) {
    console.log("here", resp[0]);
    res.send({
      info: resp[0],
      trackResponse: resp[1],
      // shipment: resp[2],
      // UpsPackage: resp[3],
      // activity1: resp[4],
      // deliveryDate: resp[5],
    });
  });
});
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build/index.html"));
});

const url =
  "https://wwwcie.ups.com/track/v1/details/1Z5338FF0107231059?locale=en_US";

// const usersRef = ref.child("users");

// const api = {
//   transId: "",
//   transactionSrc: "",
//   userName: "",
//   password: "",
// };

const headers = {
  // TransId: "12345",
  // TransactionSrc: "TestTrack",
  // Username: "matthew_murphy1",
  // Password: "Kelsey-123",
  AccessLicenseNumber: "6D8811C98EB6B651",
  ContentType: "application/json",
  Accept: "application/json",
};
const getUpsData = (resp) => {
  fetch(url, { headers: headers })
    .then(function (data) {
      return data.json();
    })
    .then(function (parsed) {
      resp(parsed);
    });
};

app.get("/data", (request, response) => {
  getUpsData(function (resp) {
    response.send(resp);
  });
});

// middleware

// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 5000
server.listen(port, () => {
  console.log("server started on port " + port);
});
