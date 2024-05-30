const Order = require("../models/Order");
const {
  verifyAndAdmin,
  verifyToken,
} = require("../configurations/verifyToken");
const router = require("express").Router();

// CREATE ORDER
router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// UPDATE ORDER
router.put("/:id", verifyAndAdmin, async (req, res) => {
  const orderId = req.params.id;
  const updates = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ error: "Failed to update order" });
  }
});

// DELETE ORDER
router.delete("/:id", verifyAndAdmin, async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    await order.remove();

    res.status(200).json({ message: "Deleted order", order });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: "Failed to delete order" });
  }
});

// GET ORDER BY ID
router.get("/find/:userId", async (req, res) => {
  const orderId = req.params.userId;

  try {
    const orders = await Order.find(orderId);

    if (!orders) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(orders);
    w;
  } catch (err) {
    console.error("Error getting order by ID:", err);
    res.status(500).json({ error: "Failed to get order" });
  }
});

// GET ALL ORDERS
router.get("/", verifyAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "No orders found" });
    }
    res.status(200).json({ message: "Requested orders", orders });
  } catch (err) {
    console.error("Error getting all orders:", err);
    res.status(500).json({ error: "Failed to get orders" });
  }
});

// GET ORDER INCOME STATISTICS
router.get("/income", verifyAndAdmin, async (req, res) => {
  const productId = req.query.id;
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elementMatch: { productId } },
          }),
        },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    console.error("Error getting order income statistics:", err);
    res.status(500).json({ error: "Failed to get order income statistics" });
  }
});

module.exports = router;
