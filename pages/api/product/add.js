import connectDB from '@/utils/connectDB'
import Product from '@/models/product'

connectDB()

export default async function (req, res) {
  const { image, name, price, countInStock, description, brand, category } = req.body

  if (!image || !name || !price || !countInStock || !description) return res.status(404).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const product = new Product(req.body)

    await product.save()

    const products = await Product.find()

    return res.json({
      product: product,
      products: products
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
