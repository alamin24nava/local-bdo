import React, { useEffect, useState } from 'react'
import { MdSearch } from "react-icons/md";

import DataTable from '../DataTable'
import ModalFooter from './ModalFooter';

export default function SearchAppCode(props) {
    const handleClose = props.handleClose
    const [appCode, setAppCode] = useState('')
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const handleChange = (e) =>{
        const value = e.target.value
        const feildName = e.target.name
        if(feildName === 'appCode'){
            setAppCode(value)
            if(appCode.length == 3 ){
                setOpen(true)
                setError(false)
                setDisabled(false)
            }else{
                setOpen(false)
                setError(true)
                setDisabled(true)
            }
        }
    }

    const handleClick = () =>{
        console.log(123)
    }

  return (
    <div className='modal-body-inner'>
        <div className=''>
            <h4 className='title-lg text-dark pb-3'>Enter an App Code to begin the onboarding process</h4>
            <form  className='mb-4 d-flex align-items-start gap-3'>
                <div className="type-app-code-wrap position-relative w-100">
                    <input onChange={handleChange} name='appCode' type="text" className="form-control" placeholder="Type your App Code here" />
                    <MdSearch onClick={handleClick} className='icon-lg position-absolute top-50 end-0 cursor-pointer translate-middle' />
                </div>
                {
                    error && <div className='text-danger w-25'>The App Code you provided is invalid. App Code must have 2 characters and 2 numbers. </div>
                }
            </form>
            {
                open && 
                <DataTable/>
            }
        </div>
        {/* <ModalFooter disabled={disabled} cancel='cancel' next = 'CREATE NEW ONBOARDING REQUEST' /> */}
        <footer className='modal-footer gap-3 border-top-0 px-0 pb-0'>
            <button className='btn btn-outline-primary text-uppercase' onClick={handleClose}>cancel</button>
            <button disabled={disabled} className='btn btn-primary text-uppercase' onClick={handleClick}>CREATE NEW ONBOARDING REQUEST</button>
        </footer>
    </div>
  )
}
