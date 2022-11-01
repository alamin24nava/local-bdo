import React, { useState } from 'react'

export default function AppCodeDropdown() {
  const [showDropDown, setShowDropDown] = useState(false)
  const handleClick = () =>{
    setShowDropDown(!showDropDown)
  }
  return (
    <div className="dropdown">
      <button onClick={handleClick} className="btn btn-white dropdown-toggle w-100 text-start d-flex align-items-center justify-content-between box-shadow p-3"><div>App Code XD99 <span className='app-code-status'>Draft</span></div></button>
      {
        showDropDown && 
        <ul className="dropdown-menu d-initial dropdown-menu-dark w-100">
        <li><a className="dropdown-item active" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Separated link</a></li>
      </ul>
      }

    </div>
  )
}
