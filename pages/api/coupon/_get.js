import connectDB from '@/utils/connectDB'
import Coupon from '@/models/coupon'

connectDB()

export default async function (req, res) {
  try {
    const coupons = await Coupon.find().sort({ createdAt: -1 })

    if (!coupons) return res.status(404).json({ msg: 'Coupons not found.' })

    res.send(coupons)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
