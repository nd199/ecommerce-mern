const Product = require("../models/Product");
const bCrypt = require("bcrypt");
const {
  verifyAndAdmin,
} = require("../configurations/verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyAndAdmin, async (req, res) => {
  const productId = req.params.id;
  const updates = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE
router.delete("/:id", verifyAndAdmin, async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    await Product.deleteOne(product);

    res.status(200).json({ message: "Deleted product", product });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// GET Product

router.get("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error("Error getting product by ID:", err);
    res.status(500).json({ error: "Failed to get product" });
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    if (!products) {
      return res.status(404).json({ error: "No products found" });
    }

    res.status(200).json({ message: "Requested products", products });
  } catch (err) {
    console.error("Error getting products:", err);
    res.status(500).json({ error: "Failed to get products" });
  }
});

module.exports = router;
