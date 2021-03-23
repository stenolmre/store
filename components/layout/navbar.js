import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCartState } from '@/context/cart'

const Navbar = () => {
  const { pathname } = useRouter()

  const { cartItems } = useCartState()

  return <nav>
    <section>
      <img src="/logo.png" alt="logo"/>
      <div>
        <Link href="/"><a className={pathname === '/' ? 'nav nav_active' : 'nav'}>
          home
        </a></Link>
        <Nav url="/shop" name="shop"/>
        <Nav url="/contact" name="contact"/>
        <Nav url="/terms" name="terms"/>
      </div>
    </section>
    <section>
      <div className="navbar_cart">
        <Link href="/cart"><a><i className="fas fa-shopping-cart"/></a></Link>
      </div>
      <div className="navbar_social">
        <SocialLink url="https://instagram.com/" icon="fab fa-instagram"/>
        <SocialLink url="https://facebook.com/" icon="fab fa-facebook-f"/>
        <SocialLink url="https://twitter.com/" icon="fab fa-twitter"/>
        <SocialLink url="mailto:google@gmail.com" icon="fas fa-envelope"/>
        <SocialLink url="tel:37255599900" icon="fas fa-phone"/>
      </div>
    </section>
    <style jsx>
      {`
        .navbar_cart i::after {
          content: '${cartItems.map(el => el.quantity).reduce((acc, item) => acc + item, 0)}';
        }
      `}
    </style>
  </nav>
}

const Nav = ({ url, name }) => {
  const { pathname } = useRouter()

  return <Link href={url}><a className={pathname.slice(0, url.length) === url ? 'nav nav_active' : 'nav'}>
    {name}
  </a></Link>
}

const SocialLink = ({ url, icon }) => <a href={url} rel="noreferrer noopener" target="_blank">
  <i className={icon}/>
</a>

export default Navbar
