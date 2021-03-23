import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const CouponSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: {
    type: String,
    required: true
  },
  percent: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Coupon = mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema)

export default Coupon
