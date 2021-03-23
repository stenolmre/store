import connectDB from '@/utils/connectDB'
import Order from '@/models/order'

connectDB()

export default async function (req, res) {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })

    if (!orders) return res.status(404).json({ msg: 'Orders not found.' })

    res.send(orders)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
