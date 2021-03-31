import React from "react"
import EarthquakeItem from "./EarthquakeItem"

import "../css/earthquakeList.css"

const EarthquakeList = props => {
  if(props.earthquakes) {
    return (
      <ul>
        <div className='headerBlock'>
          <p className='listHeader'>Title</p>
          <p onClick={() => props.toggleHeaderProps('mag')} className='listHeader'>Magnitude</p>
          <p onClick={() => props.toggleHeaderProps('time')} className='listHeader'>Time</p>
        </div>
  
        {props.earthquakes.map(earthquake => (
          <EarthquakeItem
            key={earthquake.id}
            earthquake={earthquake}
            selectLineItemProps={props.selectLineItemProps}
          />
        ))}
      </ul>
    )  
  } else {
    return (
      <p>Loading...</p>
    )
  }

}
export default EarthquakeList