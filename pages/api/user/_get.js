import connectDB from '@/utils/connectDB'
import User from '@/models/user'

connectDB()

export default async function get(req, res) {
  try {
    const users = await User.find()

    if (!users) return res.status(404).json({ msg: 'Users not found.' })

    res.send(users)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
