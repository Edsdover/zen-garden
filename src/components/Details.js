import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { convertDate } from '../helpers/date'

import data from '../json/earthquakes.json';

import "../css/details.css"

const EarthquakeDetails = () => {
  const [earthquakes] = useState(data.data.features)

  const [quakeInfo, setQuakeInfo] = useState([data.data.features[0]])
  const location = useLocation();
  useEffect(() => {
    const propsId = location.pathname.split('/')[2];
    if (propsId) {
      setQuakeInfo(earthquakes.filter(function (quake) { 
        return quake.id === propsId; 
      }))
    }
    return () => {
    }
  }, [earthquakes, location.pathname])
  if (!quakeInfo) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    )
  } else {
    return (
    <div>
      <h4 className='deatilsHeader'>{quakeInfo[0].properties.place}</h4>
      <div className='detailsContainer'>
        <div className='detailsTitles'>
          <p className='title'>Title</p>
          <p className='title'>Magnitude</p>
          <p className='title'>Time</p>
          <p className='title'>Status</p>
          <p className='title'>Tsunami</p>
          <p className='title'>Type</p>
        </div>
        <div className='detailsInfo'>
          <p className='info'>{quakeInfo[0].properties.place}</p>
          <p className='info'>{quakeInfo[0].properties.mag}</p>
          <p className='info'>{convertDate(quakeInfo[0].properties.time)}</p>
          <p className='info'>{quakeInfo[0].properties.status}</p>
          <p className='info'>{quakeInfo[0].properties.tsunami}</p>
          <p className='info'>{quakeInfo[0].properties.type}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default EarthquakeDetails