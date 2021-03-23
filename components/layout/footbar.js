import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footbar = () => {
  const { pathname } = useRouter()

  return <div className="footbar">
    <Link href="/"><a className={pathname === '/' ? 'footbar_item active_footbar_item' : 'footbar_item'}>
      <i className="fas fa-home"/>
      <p>home</p>
    </a></Link>
    <Item name="shop" icon="fas fa-tags" url="/shop"/>
    <Item name="contact" icon="fas fa-phone" url="/contact"/>
    <Item name="cart" icon="fas fa-shopping-cart" url="/cart"/>
  </div>
}

const Item = ({ name, icon, url }) => {
  const { pathname } = useRouter()

  return <Link href={url}><a className={pathname.slice(0, url.length) === url ? 'footbar_item active_footbar_item' : 'footbar_item'}>
    <i className={icon}/>
    <p>{name}</p>
  </a></Link>
}

export default Footbar
