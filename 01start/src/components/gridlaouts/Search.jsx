import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

function Search() {
  return (
    <div className="row mt-3">

      <div className="col-8">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
        />
      </div>

      <div className="col-4">
        <button className="btn btn-primary px-5">
          Search
        </button>
      </div>

    </div>
  )
}

export default Search
