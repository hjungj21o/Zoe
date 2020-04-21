const express = require("express");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
  res.json({msg: "Success"});
})

//registering a user - INCOMPLETE!
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Use the validations to send the error
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => { 
        bcrypt.hash(newUser.password, salt, (err, hash) => { 
          if (err) throw err;  
          newUser.password = hash;
          newUser.save()
            .then(user => {
                const payload = { id: user.id, email: user.email };

                jwt.sign(payload, keys.secretOrkey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer" + token
                    });
                });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});


//logging in a user
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      // Use the validations to send the error
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
