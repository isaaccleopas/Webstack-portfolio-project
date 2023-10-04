const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ['House', 'Land'],
    required: true,
  },
  category: {
    type: String,
    enum: ['For Sale', 'For Rent'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  bedrooms: {
    type: Number,
    required: function () {
      return this.propertyType === 'House';
    },
  },
  squareMeter: {
    type: Number,
    required: function () {
      return this.propertyType === 'Land';
    },
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reviews: [reviewSchema],
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
