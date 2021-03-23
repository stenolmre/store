import connectDB from '@/utils/connectDB'
import User from '@/models/user'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const user = await User.findById(id)

    if (!user) return res.status(404).json({ msg: 'User not found.' })

    await user.remove()

    const users = await User.find()

    res.send(users)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
