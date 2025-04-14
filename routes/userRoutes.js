const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Order = require("../models/Order");
const Admin = require("../models/Admin");
const Product = require("../models/Product");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users fetched:", users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/postuser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    console.log("Admins fetched:", orders);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/postorders", async (req, res) => {
  try {
    const newOrders = new Order(req.body);
    const savedOrders = await newOrders.save();
    res.status(201).json(savedOrders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/deleteorders/:id", async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/admin", async (req, res) => {
  try {
    const admin = await Admin.find();
    console.log("Admins fetched:", admin);
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/postadmin", async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/deleteadmin/:id", async (req, res) => {
  try {
    const deleted = await Admin.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/product", async (req, res) => {
  try {
    const prod = await Product.find();
    console.log("Admins fetched:", prod);
    res.json(prod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/postproduct", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
