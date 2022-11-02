import React, { useState } from 'react'
import { FiCheck } from "react-icons/fi";

import StepperControl from './StepperControl'
import SelfAssessment from './selfAssessment/Index';
import Services from './services/Index';
import AppInfo from './appInfo/Index';
import Review from './stepReview/Index';
import NonProdQualification from './nonProdQualification/Index';
import ProdReadiness from './prodReadiness/Index';
import ProdQualification from './prodQualification/Index';



export default function HorizontalStepper(props) {
    const handleClose = props.handleClose
    const steps = ['Self-Assessment', 'Services', 'App Info', 'Review', 'Non Prod Qualification', 'Prod Readiness','Prod Qualification']
    // const steps = ['Self-Assessment', 'Services', 'App Info', 'Review']
    const [stepActive, setStepActive] = useState(1)
    const [stepCompleated, setStepCompleated] = useState(1)
    const handleNext = () =>{
        setStepActive(stepActive + 1);
    }
    const handlePrev = () =>{
        setStepActive(stepActive - 1)
    }
    // console.log(stepActive)
  return (
    <div className='modal-body-inner '>
        <div>
            <div className='step-items d-flex align-items-center justify-content-center mb-5'>
                {
                    steps.map((step, index) =>(
                        // Step active and compleated class name(active compleated)
                        <div className={ index === 0 ? 'step-item active compleated':'step-item'} key={index}>
                            <div className='step-index'>
                                {index + 1}
                                {/* <FiCheck className='fs-4'/> */}
                            </div>
                            <div className='step-desc'>{step}</div>
                        </div>
                    ))
                }
            </div>
            <div className='display-step-content'>
                {stepActive === 1 ? (
                    <SelfAssessment />
                  ) : ''}

                {stepActive === 2 ? (
                    <Services />
                  ) : ''}

                {stepActive === 3 ? (
                    <AppInfo />
                  ) : ''}

                {stepActive === 4 ? (
                    <Review />
                  ) : ''}

                {stepActive === 5 ? (
                    <NonProdQualification />
                  ) : ''}

                {stepActive === 6 ? (
                    <ProdReadiness />
                  ) : ''}

                {stepActive === 7 ? (
                    <ProdQualification />
                  ) : ''}
                  
            </div>
        </div>

        <StepperControl handleNext = {handleNext} handlePrev={handlePrev} stepActive={stepActive} handleClose={handleClose} />
    </div>
  )
}
