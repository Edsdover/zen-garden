import React, { useEffect } from "react"
import { convertDate } from '../helpers/date'

import "../css/earthquakeItem.css"

const EarthquakeItem = props => {

  useEffect(() => {
    return () => {}
  }, [])

  const { id } = props.earthquake;
  const { time } = props.earthquake.properties;

  const formattedDateString = convertDate(time);
  
  return (
    <div className='itemContainer'>
        <button className='linkButton' onClick={() => props.selectLineItemProps(id)}>{props.earthquake.properties.place}</button>
        <p className='linkMag'>{props.earthquake.properties.mag}</p>
        <p className='linkTime'>{formattedDateString}</p>
    </div>
  )
}

export default EarthquakeItem