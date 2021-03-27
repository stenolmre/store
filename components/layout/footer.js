import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return <footer>
    <section>
      <div>
        <Link href="/shop"><a>Shop</a></Link>
        <Link href="/terms/cookiepolicy"><a>Cookie Policy</a></Link>
        <Link href="/terms/privacypolicy"><a>Privacy Policy</a></Link>
        <Link href="/terms/termsandconditions"><a>Terms & Conditions</a></Link>
      </div>
      <span>Copyrighted @ 2021 by Your Company</span>
    </section>
    <div>
      <p>Subscribe to our mailing list and be the first to know about the new products, sales and discounts.</p>
      <form>
        <input />
        <button>Subscribe</button>
      </form>
    </div>
  </footer>
}

export default Footer
