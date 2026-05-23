import React from 'react'
import "bootstrap/dist/css/bootstrap.css"


function GitProfile() {
  return (
    <div className="card">

      <div className="card-header">
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          width="100%"
          height="200"
        />
      </div>

      <div className="card-body">
        <h3>Groove Guide</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>

      <div className="card-footer">
        <button className="btn btn-outline-primary">
          Profile Details
        </button>
      </div>

    </div>
  )
}

export default GitProfile
