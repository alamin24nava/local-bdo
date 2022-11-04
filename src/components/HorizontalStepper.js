import React, { useState , useEffect} from 'react'
import { FiCheck } from "react-icons/fi";

// Custom Components
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
    const [stepActive, setStepActive] = useState(1)
    const [disabled, setDisabled] = useState(true)
    const handleNext = () =>{
      setStepActive(stepActive => stepActive + 1);
    }
    const handlePrev = () =>{
      setStepActive(stepActive => stepActive - 1);
    }

    const [questionOn, setQuestionOn] = useState('')
    const [questionTwo, setQuestionTwo] = useState('')
    const [questionThree, setQuestionThree] = useState('')
    const [questionFour, setQuestionFour] = useState('')
    const [questionFive, setQuestionFive] = useState('')
    const [questionSix, setQuestionSix] = useState('')
    const [questionSeven, setQuestionSeven] = useState('')
    const handleChange = (e) => {
        let value = e.target.value
        let fieldName = e.target.name
        
        if(fieldName === 'questionOn'){
            setQuestionOn(value)
            console.log(value)
        }
        if(fieldName === 'questionTwo'){
            setQuestionTwo(value)
            console.log(questionTwo)
        }
        if(fieldName === 'questionThree'){
            setQuestionThree(value)
            console.log(questionThree)
        }
        if(fieldName === 'questionFour'){
            setQuestionFour(value)
            console.log(questionFour)
        }
        if(fieldName === 'questionFive'){
            setQuestionFive(value)
            console.log(questionFive)
        }
        if(fieldName === 'questionSix'){
            setQuestionSix(value)
            console.log(questionSix)
        }
        if(fieldName === 'questionSeven'){
            setQuestionSeven(value)
            console.log(questionSeven)
        }
    }
    useEffect(() => {
      if(questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven){
        setDisabled(false)
      }
    }, [questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven])
    
  return (
    <div className='modal-body-inner '>
        <div>
            <div className='step-items d-flex align-items-center justify-content-center mb-5'>
                {
                    steps.map((step, index) => {
                      return(
                        // Step active and compleated class name(active compleated)
                        <div className={`step-item ${stepActive === index + 1 ? 'active': (stepActive != index+1 && index < stepActive ? "compleated" : "")}`} key={index}>
                          <div className='step-index'>
                            <span className='step-index-hide'>{ index + 1 }</span>
                            {stepActive != index + 1 && index < stepActive && (<FiCheck className='fs-4 transition'/>)}
                          </div>
                          <div className='step-desc'>{step}</div>
                        </div>
                      )
                    })
                }
            </div>
            <div className='display-step-content'>
                {stepActive === 1 ? (
                    <SelfAssessment handleChange={handleChange} questionOn ={questionOn} questionTwo ={questionTwo} />
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

        <StepperControl stepsLength={steps.length} handleNext = {handleNext} handlePrev={handlePrev} stepActive={stepActive} handleClose={handleClose} disabled={disabled} />
    </div>
  )
}
