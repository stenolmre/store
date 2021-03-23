import connectDB from '@/utils/connectDB'
import Order from '@/models/order'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const { country, state, city, street, postal_code } = req.body

  let fields = {}
  fields.shipping_address = {}
  if (country) fields.shipping_address.country = country
  if (state) fields.shipping_address.state = state
  if (city) fields.shipping_address.city = city
  if (street) fields.shipping_address.street = street
  if (postal_code) fields.shipping_address.postal_code = postal_code

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
