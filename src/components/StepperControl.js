import React, { useState } from 'react'

export default function StepperControl(props) {
  const {handleNext, handlePrev, handleClose, stepActive, stepsLength, disabled} = props

  return (
    <div className='d-flex justify-content-end gap-3 mt-3'>
        <button className='btn btn-outline-primary text-uppercase' onClick={(stepActive === 1 ? handleClose : handlePrev)}>{stepActive === 1 ? 'Cancel' : 'Previous'}</button>
        <button disabled={disabled} className='btn btn-primary text-uppercase' onClick={handleNext}>{ stepActive > stepsLength - 1 ? 'Finish' : 'Go to next'}</button>
    </div>
  )
}
