import connectDB from '@/utils/connectDB'
import Coupon from '@/models/coupon'

connectDB()

export default async function (req, res) {
  const { name, percent } = req.body

  if (!percent || !name) return res.status(404).json({ msg: 'Please add coupon name and percentage.' })

  try {
    const coupon = new Coupon(req.body)

    await coupon.save()

    const coupons = await Coupon.find().sort({ createdAt: -1 })

    res.json({
      coupon: coupon,
      coupons: coupons
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
