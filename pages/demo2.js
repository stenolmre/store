import React, { Fragment, useState, Children, cloneElement } from 'react'

const Carousel = ({ children }) => {
  const [position, setPosition] = useState(1)
  const [direction, setDirection] = useState(children.length === 2 ? 'prev' : 'next')
  const [sliding, setSliding] = useState(false)

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, {
      numSlides: children.length || 1
    })
  )

  const getOrder = (itemIndex) =>  {
    if (children.length === 2) return itemIndex

    if (itemIndex - position < 0) return children.length - Math.abs(itemIndex - position)
    return itemIndex - position
  }

  const doSliding = (dir, pos) => {
    setSliding(true)
    setDirection(dir)
    setPosition(pos)

    setTimeout(() => {
      setSliding(false)
    }, 50)
  }

  const nextSlide = () => {
    doSliding("next", position => position + 1)
  }

  const prevSlide = () => {
    if (children.length === 2 && position === 0) return

    doSliding("prev", position === 0 ? children.length - 1 : position - 1)
  }

  return <div>
    <Wrapper>
      <CarouselContainer
          sliding={sliding}
          direction={direction}
          numSlides={childrenWithProps.length}>
        {
          childrenWithProps.map((child, index) => (
            <CarouselSlot
              key={index}
              order={() => getOrder(index)}
              numSlides={childrenWithProps.length}
              position={position}
            >
              {child}
            </CarouselSlot>
          ))
        }
      </CarouselContainer>
    </Wrapper>
    <button onClick={prevSlide}>Prev</button>
    <button onClick={nextSlide}>Next</button>
  </div>
}

const Index = () => <Carousel>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
  <Item>Item 4</Item>
</Carousel>

export default Index

const CarouselContainer = ({ children, sliding, direction }) => {
  return <Fragment>
    <div className="carousel_container">
      { children }
    </div>
    <style jsx>
      {`
        .carousel_container {
          display: flex;
          margin: 0 0 20px 20px;
          transition: ${sliding ? "none" : "transform 1s ease"};
          transform: ${!sliding ? 'translateX(calc(-80% - 20px))' : direction === 'prev' ? 'translateX(calc(2 * (-80% - 20px)))' : 'translateX(0%)'}
        }
      `}
    </style>
  </Fragment>
}

const Wrapper = ({ children }) => {
  return <Fragment>
    <div className="wrapper">
      { children }
    </div>
    <style jsx>
      {`
        .wrapper {
          width: 100%;
          overflow: hidden;
        }
      `}
    </style>
  </Fragment>
}

const CarouselSlot = ({ children, order }) => {
  return <Fragment>
    <div className="carousel_slot">
      { children }
    </div>
    <style jsx>
      {`
        .carousel_slot {
          flex: 1 0 80%;
          flex-basis: 80%;
          margin-right: 20px;
          order: ${order};
        }
      `}
    </style>
  </Fragment>
}

const Item = ({ children }) => {
  return <Fragment>
    <div className="item">
      { children }
    </div>
    <style jsx>
      {`
        .item {
          background: darkorange;
          text-align: center;
          padding: 50px;
          color: white;
          min-width: 160px;
          margin: 0 16px 0 0;
        }
      `}
    </style>
  </Fragment>
}
