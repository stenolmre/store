import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ProductSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  countInStock: {
    type: Number,
    default: 1
  },
  description: {
    type: String,
    required: true
  },
  brand: String,
  category: String,
  reviews: [{
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product
