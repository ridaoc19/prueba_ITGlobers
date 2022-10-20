const axios = require("axios");
const Globers = require("./model.js");
require("dotenv").config();

module.exports = {
  async getRegistration(req, res) {
    try {
      const verificationDB = await Globers.findOne({
        ip_address: req.params.ip,
      });
      res.status(200).json(verificationDB);
    } catch (error) {
      res.json({ err: error.message });
    }
  },

  postRegistration(req, res) {

    Globers.findOne({
      email: req.body.email,
    }).then(data => {
      if (data !== null) return res.status(200).json({message: data.email})
      Globers.create(req.body)
        .then((data) => {
          res.status(200).json(data)
        })
        .catch((error) => res.json({ message: error }));
    }).catch((error) => res.json({ message: error }));

  },
};
