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

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const user = { username, password: hash };
    await Users.add(user);
    res.status(201).json({ message: `You are now logged in, ${username}` });
  } catch(err) {
    next(err);
  }
})

module.exports = router
