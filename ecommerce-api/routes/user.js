const User = require("../models/User");
const bCrypt = require("bcrypt");
const {
  verifyAndAuthorize,
  verifyAndAdmin,
} = require("../configurations/verifyToken");

const router = require("express").Router();

// UPDATE USER
router.put("/:id", verifyAndAuthorize, async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  try {
    if (updates.password) {
      const salt = await bCrypt.genSalt(10);
      updates.password = await bCrypt.hash(updates.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// DELETE USER
router.delete("/:id", verifyAndAuthorize, async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.deleteOne(user);

    res.status(200).json({ message: "Deleted user", user });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// GET USER BY ID
router.get("/:id", verifyAndAdmin, async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { password: userPassword, ...others } = user._doc;

    res.status(200).json({ message: "Requested user", ...others });
  } catch (err) {
    console.error("Error getting user by ID:", err);
    res.status(500).json({ error: "Failed to get user" });
  }
});

// GET ALL USERS
router.get("/", verifyAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();

    if (!users) {
      return res.status(404).json({ error: "No users found" });
    }

    res.status(200).json({ message: "Requested users", users });
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({ error: "Failed to get users" });
  }
});

// GET USER STATISTICS
router.get("/stats", verifyAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    console.error("Error getting user statistics:", err);
    res.status(500).json({ error: "Failed to get user statistics" });
  }
});

module.exports = router;
