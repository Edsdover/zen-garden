import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import EarthquakeList from "./EarthquakeList"

import data from '../json/earthquakes.json';
import "../css/landing.css"

const Landing = () => {
  const [earthquakes, setEarthquakes] = useState(data.data.features)
  const [sortConfig, setSortConfig] = useState(false);
  const history = useHistory();

  function setProfileInfo() {
    // Set profile data to local storage to a save request.
    localStorage.setItem("profile", JSON.stringify(data.profile))
  }

  useEffect(() => {
    setProfileInfo()
  }, [])

  const selLineItem = id => {
    history.push(`/details/${id}`);
  }

  // Wanted to do more here and make the title sortable.
  const toggleHeader = header => {
    let newOrder = [];
    newOrder = earthquakes.sort((a,b) => {
      setSortConfig(true);
      if (sortConfig === true) {
        setSortConfig(false);
        return b.properties[header] - a.properties[header];
      }
      return a.properties[header] - b.properties[header];
    })
    setEarthquakes([...newOrder]);
  }

  return (
    <div className="container">
      <div className="inner">
        <h3 className='LandingHeader'>USGS All Earthquakes, Past Hour</h3>
        <EarthquakeList
            earthquakes={earthquakes}
            selectLineItemProps={selLineItem}
            toggleHeaderProps={toggleHeader}
        />
      </div>
    </div>
  )
}

export default Landing