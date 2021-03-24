import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

import { SmallIllustration, BigIllustration } from '@/illustration'

const Landing = () => {
  const div = useRef(null)
  const [divWidth, setDivWidth] = useState(1)

  useEffect(() => {
    setDivWidth(div.current ? div.current.offsetWidth : 1)

    const handleResize = () => {
      setDivWidth(div.current ? div.current.offsetWidth : 1)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [div.current])

  return <div className="landing_container">
    <div className="landing_content">
      <div className="landing_content_illustration">
        <SmallIllustration />
      </div>
      <h1>Make the world come to you.</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <Link href="/shop"><a>Shop</a></Link>
    </div>
    <div className="landing_video_container" ref={div}>
      <div className="landing_video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/65JrtwtTOdc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="landing_video_illustration">
        <BigIllustration />
      </div>
    </div>
    <style jsx>
      {`
        .landing_video_container {
          height: ${divWidth / 1.5}px;
        }

        @media (max-width: 768px) {
          .landing_video_container {
            height: ${divWidth / 1.5}px;
          }
        }
      `}
    </style>
  </div>
}

export default Landing
