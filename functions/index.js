const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPxAyL6DQfGXNCPHzMA8mbCWJR2uQyMl2GaKZhGD6n6REzaAbIWjk2lrxQAUjIUmKThAX6EdUSobcy2N8Ue594l00gf61jRFO"
);

// API

// -App Config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(
    "Payment Request received for an Amount of ------->>>>>>> ",
    total
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of currency
    currency: "usd",
  });
  // Ok - Created resp
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-79bba/us-central1/api
