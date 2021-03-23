import connectDB from '@/utils/connectDB'
import Order from '@/models/order'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const order = await Order.findById(id)

    if (!order) return res.status(404).json({ msg: 'Order not found.' })

    res.send(order)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
