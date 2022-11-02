import React from 'react'

export default function StepperControl(props) {
  const {handleNext, handlePrev, handleClose, stepActive} = props
  // if(stepActive === 1){
    
  // }
  return (
    <div className='d-flex justify-content-end gap-3 mt-3'>
        <button className='btn btn-outline-primary text-uppercase' onClick={(handlePrev, handleClose)}>{stepActive === 1 ? 'Cancel' : 'Previous'}</button>
        <button className='btn btn-primary text-uppercase' onClick={handleNext}>Go to next</button>
    </div>
  )
}
