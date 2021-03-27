import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const OrderSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  products: {
    type: Array,
    required: true
  },
  tax: {
    type: Number,
    default: 0
  },
  shipping: {
    company: String,
    location: String,
    price: Number
  },
  discount: {
    type: Number,
    default: 0
  },
  coupon: String,
  isPaid: {
    type: Boolean,
    default: false
  },
  isDelievered: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  paymentIntent: {
    type: String
  },
  shipping_address: {
    country: String,
    state: String,
    city: String,
    street: String,
    postal_code: String
  }
}, {
  timestamps: true
})

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)

export default Order
