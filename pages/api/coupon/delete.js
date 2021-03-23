import connectDB from '@/utils/connectDB'
import Coupon from '@/models/coupon'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const coupon = await Coupon.findById(id)

    if (!coupon) return res.status(404).json({ msg: 'Coupon not found.' })

    await coupon.remove()

    const coupons = await Coupon.find()

    res.send(coupons)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
