import React from 'react'

const SmallIllustration = () => {
  const n = 25

  return <div className="illustration_small">
    {
      [...Array(n)].map((e, i) => <div className="illustration_dot" key={i}/>)
    }
    <style jsx>{`
      .illustration_small {
        width: 150px;
        height: 100px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        place-items: center;
        position: relative;
        z-index: -1;
      }

      .illustration_dot {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: var(--dodgerblue);
        opacity: .2;
      }
    `}</style>
  </div>
}

const BigIllustration = () => {
  const n = 100

  return <div className="illustration_big">
    {
      [...Array(n)].map((e, i) => <div className="illustration_dot" key={i}/>)
    }
    <style jsx>{`
      .illustration_big {
        width: 300px;
        height: 200px;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        place-items: center;
        position: relative;
        z-index: -1;
      }

      .illustration_dot {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: var(--dodgerblue);
        opacity: .2;
      }
    `}</style>
  </div>
}

export { SmallIllustration, BigIllustration }
