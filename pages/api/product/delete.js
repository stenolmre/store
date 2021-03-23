import connectDB from '@/utils/connectDB'
import Product from '@/models/product'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const product = await Product.findById(id)

    if (!product) return res.status(404).json({ msg: 'Product not found.' })

    await product.remove()

    const products = await Product.find()

    res.send(products)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
