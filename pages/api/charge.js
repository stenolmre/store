const stripe = require("stripe")(`${process.env.STRIPE_SK_TEST}`)

export default async function (req, res) {
  const { amount, receipt_email } = req.body

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      receipt_email,
      currency: 'EUR',
      payment_method: ['card']
    })

    res.send(payment)
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
