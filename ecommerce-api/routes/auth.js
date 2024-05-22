const User = require("../models/User");
const bCrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mailGen = require("mailgen");

//REGISTER

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const salt = await bCrypt.genSalt(10);
    const hashedPassword = await bCrypt.hash(password, salt);

    const newUser = new User({
      name,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    let config = {
      service: "gmail",
      auth: {
        user: "codenaren@gmail.com",
        pass: "ogipvbgyfznuksip",
      },
    };

    let transport = nodemailer.createTransport(config);
    let mailGenerator = new mailGen({
      theme: "default",
      product: {
        name: "mailGen",
        link: "https://mailgen.js/",
      },
    });

    let response = {
      body: {
        name: username,
        intro: "You Registered Successfully",
        table: {
          data: [
            {
              item: "Welcome!",
              description: "You have successfully registered.",
            },
          ],
        },
      },
    };

    let mail = mailGenerator.generate(response);
    let message = {
      from: "codenaren@gmail.com",
      to: email,
      subject: "Registration Successful",
      html: mail,
    };

    await transport.sendMail(message);

    res.status(201).json(user);
  } catch (err) {
    console.error("Error registering user:", err);

    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    res.status(500).json({ error: "An error occurred while registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please register first." });
    }

    const isCorrectPassword = await bCrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res
        .status(401)
        .json({ error: "Incorrect username/email or password" });
    }

    const payload = { id: user._id, isAdmin: user.isAdmin };
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
      console.error("Secret key is null or undefined");
      return res.status(500).json({ error: "Internal server error" });
    }

    const token = jwt.sign(payload, secretKey, {
      expiresIn: "3d",
      algorithm: "HS256",
    });
    const { password: userPassword, ...remain } = user._doc;

    res.status(200).json({
      message: "Logged in successfully",
      ...remain,
      accessToken: token,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
