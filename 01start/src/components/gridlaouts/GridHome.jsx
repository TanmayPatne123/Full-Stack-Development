import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import GitProfile from './GitProfile'
import GitDetails from './GitDetails'
import Search from './Search'

function GridHome() {
  return (
    <div className="container mt-5">

      <h2 className="text-primary">
        GitHub Search Application
      </h2>

      <Search />

      <div className="row mt-4">

        <div className="col-4">
          <GitProfile />
        </div>

        <div className="col-8">
          <GitDetails />
        </div>
        
      </div>

    </div>
  )
}

export default GridHome
