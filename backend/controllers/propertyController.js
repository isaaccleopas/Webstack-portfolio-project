const Property = require('../models/Property');
const propertyController = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');

// get all
propertyController.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get all from a specific type
propertyController.get('/type/:propertyType', async (req, res) => {
  const { propertyType } = req.params;
  try {
    const propertiesOfType = await Property.find({ propertyType }).populate('createdBy', '-password');
    return res.status(200).json(propertiesOfType);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get counts of types
propertyController.get('/counts', async (req, res) => {
  try {
    const propertyCounts = await Property.aggregate([
      { $group: { _id: '$propertyType', count: { '$sum': 1 } } },
    ]);
    return res.status(200).json(propertyCounts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Advanced property search
propertyController.get('/advanced', async (req, res) => {
  try {
    const { propertyType, category, minPrice, maxPrice } = req.query;
    const filter = {};

    if (propertyType) {
      filter.propertyType = propertyType;
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter.price = { $gte: minPrice };
    } else if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }

    const properties = await Property.find(filter);

    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get individual property
propertyController.get('/:propertyId', async (req, res) => {
  const { propertyId } = req.params;
  try {
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    return res.status(200).json(property);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get reviews for individual property
propertyController.get('/:propertyId/reviews', async (req, res) => {
  const { propertyId } = req.params;
  try {
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    const reviews = property.reviews || [];
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Create a review for a property
propertyController.post('/:propertyId/reviews', verifyToken, async (req, res) => {
  const { propertyId } = req.params;
  const reviewData = req.body;
  try {
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    property.reviews.push(reviewData);

    const updatedProperty = await property.save();

    return res.status(201).json(updatedProperty);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// create an estate
propertyController.post('/', verifyToken, async (req, res) => {
  try {
    const newProperty = await Property.create({ ...req.body, createdBy: req.user.id });
    return res.status(201).json(newProperty);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// update an estate
propertyController.put('/:propertyId', verifyToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.createdBy.toString() !== req.user.id) {
      throw new Error("You are not allowed to update other people's property");
    } else {
      const updatedProperty = await Property.findByIdAndUpdate(
        req.params.propertyId,
        { $set: req.body },
        { new: true }
      );

      return res.status(200).json(updatedProperty);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// delete an estate
propertyController.delete('/:propertyId', verifyToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not allowed to delete other people's property" });
    }

    await Property.deleteOne({ _id: req.params.propertyId });
    return res.status(200).json({ message: 'Successfully deleted property' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = propertyController;
