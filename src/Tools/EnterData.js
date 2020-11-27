import React from 'react'

function EnterData(props) {
  const {
    onChangeData,
    data
  } = props

  return (
    <div>
      <input type="number" className="input" value={data} onChange={onChangeData} />
    </div>
  )
}

export default EnterData;