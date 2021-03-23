import connectDB from '@/utils/connectDB'
import Product from '@/models/product'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const { name, price, countInStock, description, brand, category } = req.body

  if (!name || !price || !countInStock || !description) return res.status(404).json({ msg: 'Please fill all fields with correct information.' })

  let fields = {}
  if (name) fields.name = name
  if (price) fields.price = price
  if (countInStock) fields.countInStock = countInStock
  if (description) fields.description = description
  if (brand) fields.brand = brand
  if (category) fields.category = category

  try {
    let product = await Product.findById(id)

    if (product) {
      product = await Product.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const products = await Product.find()

      return res.json({
        product: product,
        products: products
      })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
