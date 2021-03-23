import connectDB from '@/utils/connectDB'
import Order from '@/models/order'

connectDB()

export default async function (req, res) {
  const { products, tax, shipping, discount, coupon, isPaid, isDelievered, name, email, country, state, city, street, postal_code } = req.body

  if (!products) return res.status(404).json({ msg: 'Please select at least one product before checking out.' })

  try {
    const order = new Order(req.body)

    await order.save()

    res.send(order)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
