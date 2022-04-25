const router = require("express").Router();
const bcrypt = require('bcryptjs');

const Users = require("./users-model.js");

router.get("/", (req, res, next) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next)
});

// router.post('/register', (req, res, next) => {

// })

module.exports = router
