import React, { useState, useEffect } from 'react'
import { FiCheck, FiShoppingCart } from "react-icons/fi";

// Custom Components
import StepperControl from './StepperControl'
import SelfAssessment from './selfAssessment/Index';
import Services from './services/Index';
import AppInfo from './appInfo/Index';
import Review from './stepReview/Index';
import NonProdQualification from './nonProdQualification/Index';
import ProdReadiness from './prodReadiness/Index';
import ProdQualification from './prodQualification/Index';
import AppCodeDropdown from './AppCodeDropdown';

export default function HorizontalStepper(props) {
    const handleClose = props.handleClose
    const steps = ['Self-Assessment', 'Services', 'App Info', 'Review', 'Non Prod Qualification', 'Prod Readiness', 'Prod Qualification']
    const [stepActive, setStepActive] = useState(1)
    const [disabled, setDisabled] = useState(true)
    const [countShoping, setCountShoping] = useState(false)
    const handleNext = () => {
        setStepActive(stepActive => stepActive + 1);
        setCountShoping(true)
    }
    const handlePrev = () => {
        setStepActive(stepActive => stepActive - 1);
    }

    // Step Self Assessment
    const [questionOn, setQuestionOn] = useState('')
    const [questionTwo, setQuestionTwo] = useState('')
    const [questionThree, setQuestionThree] = useState('')
    const [questionFour, setQuestionFour] = useState('')
    const [questionFive, setQuestionFive] = useState('')
    const [questionSix, setQuestionSix] = useState('')
    const [questionSeven, setQuestionSeven] = useState('')
    // Step AppInfo
    const [useCaseSummary, setUseCaseSummary] = useState('')
    const [thirdPartySoftware, setThirdPartySoftware] = useState('')
    const handleChange = (e) => {
        let value = e.target.value
        let fieldName = e.target.name

        if (fieldName === 'questionOn') {
            setQuestionOn(value)
            console.log(value)
        }
        if (fieldName === 'questionTwo') {
            setQuestionTwo(value)
            console.log(questionTwo)
        }
        if (fieldName === 'questionThree') {
            setQuestionThree(value)
            console.log(questionThree)
        }
        if (fieldName === 'questionFour') {
            setQuestionFour(value)
            console.log(questionFour)
        }
        if (fieldName === 'questionFive') {
            setQuestionFive(value)
            console.log(questionFive)
        }
        if (fieldName === 'questionSix') {
            setQuestionSix(value)
            console.log(questionSix)
        }
        if (fieldName === 'questionSeven') {
            setQuestionSeven(value)
            console.log(questionSeven)
        }
        // Step AppInfo
        if (fieldName === 'thirdPartySoftware') {
            setThirdPartySoftware(value)
            console.log(thirdPartySoftware)
        }
        if (fieldName === 'useCaseSummary') {
            setUseCaseSummary(value)
            console.log(useCaseSummary)
        }

    }
    useEffect(() => {
        if (questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven) {
            setDisabled(false)
        }

    }, [questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, useCaseSummary])

    const [serviceCount, setServiceCount] = useState(0)
    const handleCount = () => {
        setServiceCount(serviceCount => serviceCount + 1)

    }

    return (
        <div className='modal-body-inner '>
            <div>
                <div className='d-flex align-items-center justify-content-between  mb-5'>
                    <div className='step-items d-flex align-items-center justify-content-center w-100'>
                        {
                            steps.map((step, index) => {
                                return (
                                    // Step active and compleated class name(active compleated)
                                    <div className={`step-item ${stepActive === index + 1 ? 'active' : (stepActive != index + 1 && index < stepActive ? "compleated" : "")}`} key={index}>
                                        <div className='step-index'>
                                            <span className='step-index-hide'>{index + 1}</span>
                                            {stepActive != index + 1 && index < stepActive && (<FiCheck className='fs-4 transition' />)}
                                        </div>
                                        <div className='step-desc'>{step}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {stepActive > 1 && countShoping && (
                        <div className='position-relative'>
                            <FiShoppingCart className='fs-2 text-secondary' />
                            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-primary p-2 count-shoping-items"><span className="">{serviceCount}</span></span>
                        </div>
                    )}
                </div>
                <div className='display-step-content'>
                    <div className='row'>
                        <div className='col-md-8'>
                            {stepActive === 1 ? (
                                <SelfAssessment handleChange={handleChange} questionOn={questionOn} questionTwo={questionTwo} />
                            ) : ''}

                            {stepActive === 2 ? (
                                <Services handleCount={handleCount} />
                            ) : ''}

                            {stepActive === 3 ? (
                                <AppInfo handleChange={handleChange} />
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
                        <div className='col-md-4'>
                            <AppCodeDropdown />
                        </div>
                    </div>
                </div>
            </div>

            <StepperControl stepsLength={steps.length} handleNext={handleNext} handlePrev={handlePrev} stepActive={stepActive} handleClose={handleClose} disabled={disabled} />
        </div>
    )
}
