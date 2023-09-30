const router = require("express").Router();
const Vendor=require("../models/vendor.js")


// API Routes
router.get('/vendors', async (req, res) => {
    try {
      const vendors = await Vendor.find();
      res.json(vendors);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.post('/vendors', async (req, res) => {
    try {
      const vendor = new Vendor(req.body);
      await vendor.save();
      res.status(201).json(vendor);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.put('/vendors/:id', async (req, res) => {
    try {
      const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(vendor);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.delete('/vendors/:id', async (req, res) => {
    try {
      await Vendor.findByIdAndRemove(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
    