import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound1 = (props) => {
  return (
    <div className="not-found1-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found1-container1">
        <h1 className="not-found1-text1">404</h1>
      </div>
      <div className="not-found1-container2">
        <h2 className="not-found1-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound1
