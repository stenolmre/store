import connectDB from '@/utils/connectDB'
import Order from '@/models/order'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const {
    products, tax, shipping, discount, coupon, isPaid, isDelievered, name, email, paymentIntent
  } = req.body

  let fields = {}
  if (products) fields.products = products
  if (tax) fields.tax = tax
  if (shipping) fields.shipping = shipping
  if (discount) fields.discount = discount
  if (coupon) fields.coupon = coupon
  if (name) fields.name = name
  if (email) fields.email = email
  if (isDelievered) fields.isDelievered = isDelievered
  if (isPaid) fields.isPaid = isPaid
  if (paymentIntent) fields.paymentIntent = paymentIntent

  try {
    let order = await Order.findById(id)

    if (order) {
      order = await Order.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      return res.json(order)
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
