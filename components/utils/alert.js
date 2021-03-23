import React, { Fragment } from 'react'

import { useAlertState } from '@/context/alert'

const Alert = () => {
  const alerts = useAlertState()
  console.log(alerts);

  return <div className="alerts">
    {
      alerts && alerts.map(el => <div key={el.id} className="alert" style={{ background: `${el.color}` }}>
        <p>{el.msg}</p>
      </div>)
    }
  </div>
}

export default Alert
