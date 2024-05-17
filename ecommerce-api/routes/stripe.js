const { verifyToken } = require("../configurations/verifyToken");
const router = require("express").Router();
const stripe = require('stripe')('sk_test_51PHLFKSAl2wJzNYYCqgvYAVBjf2yryxb7d0fXn6jU6soMa3V0CzVPAJnFVQ1aBvR0TB2hLDko6wLekRH5ZaXxMn600WafN5A7O');


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (err, response) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    }
  );
});

module.exports = router;
