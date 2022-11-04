import React from 'react'
import AppCodeDropdown from '../AppCodeDropdown'


import { RiSearchLine } from "react-icons/ri";
export default function Index() {
  return (
    <div className=''>
            <div className='row'>
                <div className='col-md-8'>
                    <h4 className='title-lg text-dark pb-3'>Choose services you want to add</h4>
                    <form className='position-relative'>
                        <input type="text" className="form-control ps-5 w-75" name="servicesGroup" placeholder='Search by Service Name or Group'/>
                        <RiSearchLine className='position-absolute top-50 start-3 translate-middle-y text-secondary'/>
                    </form>
                </div>
                <div className='col-md-4'>
                    <AppCodeDropdown />
                </div>
            </div>
            <footer className='modal-footer gap-3 border-top-0 px-0 pb-0 d-none'>
                <button className='btn btn-outline-primary text-uppercase'>cancel</button>
                <button className='btn btn-primary text-uppercase'>go to next</button>
            </footer>
        </div>
  )
}
