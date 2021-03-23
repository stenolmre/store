import React, { Fragment, Component, Children, cloneElement } from "react"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? "prev" : "next",
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2) return itemIndex

    if (itemIndex - position < 0)
      return numItems - Math.abs(itemIndex - position)
    return itemIndex - position
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })

    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 1) return

    this.doSliding("next", position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 0) return

    this.doSliding("prev", position === 0 ? numItems - 1 : position - 1)
  }

  render() {
    const { children } = this.props
    const { sliding, direction, position } = this.state

    const childrenWithProps = Children.map(children, child =>
      cloneElement(child, {
        numSlides: children.length || 1
      })
    )

    return (
      <div>
        <Wrapper>
          <CarouselContainer
            sliding={sliding}
            direction={direction}
            numSlides={childrenWithProps.length}
          >
            {childrenWithProps.map((child, index) => (
              <CarouselSlot
                key={index}
                order={this.getOrder(index)}
                numSlides={childrenWithProps.length}
                position={position}
              >
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>
        <button onClick={() => this.prevSlide()}>Prev</button>
        <button onClick={() => this.nextSlide()}>Next</button>
      </div>
    )
  }
}

const Index = () => <Carousel>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
  <Item>Item 4</Item>
  <Item>Item 5</Item>
  <Item>Item 6</Item>
  <Item>Item 7</Item>
  <Item>Item 8</Item>
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
