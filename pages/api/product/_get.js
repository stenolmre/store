import connectDB from '@/utils/connectDB'
import Product from '@/models/product'

connectDB()

export default async function (req, res) {
  try {
    const products = await Product.find()

    if (!products) return res.status(404).json({ msg: 'Products not found.' })

    res.send(products)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
