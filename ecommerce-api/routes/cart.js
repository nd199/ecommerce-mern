const Cart = require("../models/Cart");
const bCrypt = require("bcrypt");
const {
  verifyAndAuthorize,
  verifyAndAdmin,
  verifyToken,
} = require("../configurations/verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyAndAuthorize, async (req, res) => {
  const cartID = req.params.id;
  const updates = req.body;

  try {
    const updatedCart = await Cart.findByIdAndUpdate(cartID, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.status(200).json(updatedCart);
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json({ error: "Failed to update cart" });
  }
});

// DELETE
router.delete("/:id", verifyAndAuthorize, async (req, res) => {
  const cartId = req.params.id;
  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ error: "cart not found" });
    }

    await cart.deleteOne(cart);

    res.status(200).json({ message: "Deleted cart", cart });
  } catch (err) {
    console.error("Error deleting cart:", err);
    res.status(500).json({ error: "Failed to delete cart" });
  }
});

// GET USER'S CART

router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const cart = await Cart.findById(userId);

    if (!cart) {
      return res.status(404).json({ error: "cart not found" });
    }
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error getting cart by ID:", err);
    res.status(500).json({ error: "Failed to get cart" });
  }
});

// GET ALL

router.get("/", verifyAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();

    if (!carts) {
      return res.status(404).json({ error: "No carts found" });
    }

    res.status(200).json({ message: "Requested carts", carts });
  } catch (err) {
    console.error("Error getting carts:", err);
    res.status(500).json({ error: "Failed to get carts" });
  }
});

module.exports = router;
