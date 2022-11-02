import React, { useEffect, useState } from 'react'
import ChildModal from '../ChildModal'
import AppCodeDropdown from '../AppCodeDropdown'

const primaryTxt = 'Based on your answers you are qualified to onboard to: Public Cloud only'
const secondaryTxt = 'Click Continue to proceed with the request'
export default function SelfAssessment(props) {
    const handleClose = props.handleClose
    const [disabled, setDisabled] = useState(true)
    const [value, setValue] = useState({ questionOn: '', questionTwo: '', questionThree: '', questionFour: '', questionFive: '', questionSix: '', questionSeven: '' })
    const { questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven } = value
    const handleChange = (e) => {
        let value = e.target.value
        let fieldName = e.target.name
        setValue({ ...value, [fieldName]: value })
    }
    useEffect(() => {
        if (questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven) {
            setDisabled(false)
        }
    }, [questionOn, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven])


    const [childModal, setChildModal] = useState(false)
    const handleClickOpenChildModal = () =>  setChildModal(true)
    const closeChildModal = () =>  setChildModal(false)

    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-8'>
                    <h4 className='title-lg text-dark pb-3'>Self-Assessment Questions</h4>
                    <form>
                        <div className='question-item'>
                            <p className='question'>Q1: Is your application a SOX/SOC1 app? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionOn" id="questionOn1" value="Yes, SOX" />
                                    <label className="form-check-label" htmlFor="questionOn1">Yes, SOX</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionOn" id="questionOn2" value="Yes, SOC1" />
                                    <label className="form-check-label" htmlFor="questionOn2">Yes, SOC1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionOn" id="questionOn3" value="Yes, both" />
                                    <label className="form-check-label" htmlFor="questionOn3">Yes, both</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionOn" id="questionOn4" value="No" />
                                    <label className="form-check-label" htmlFor="questionOn4">No</label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q2: Does your application or the workload you intend on deploying on Cloud have PII? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionTwo" id="questionTwo1" value="Yes" />
                                    <label className="form-check-label" htmlFor="questionTwo1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionTwo" id="questionTwo2" value="No" />
                                    <label className="form-check-label" htmlFor="questionTwo2">No</label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q3: Is your app stateless? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionThree" id="questionThree1" value="Yes" />
                                    <label className="form-check-label" htmlFor="questionThree1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionThree" id="questionThree2" value="No" />
                                    <label className="form-check-label" htmlFor="questionThree2">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionThree" id="questionThree3" value="I don't know" />
                                    <label className="form-check-label" htmlFor="questionThree3">I don't know</label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q4: Does you app require Persistent Volumes on cloud? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionFour" id="questionFour1" value="Yes" />
                                    <label className="form-check-label" htmlFor="questionFour1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionFour" id="questionFour2" value="No" />
                                    <label className="form-check-label" htmlFor="questionFour2">No</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionFour" id="questionFour3" value="I don't know" />
                                    <label className="form-check-label" htmlFor="questionFour3">I don't know</label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q5: Is your cloud app external facing? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionFive" id="questionFive1" value="Yes" />
                                    <label className="form-check-label" htmlFor="questionFive1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionFive" id="questionFive2" value="No" />
                                    <label className="form-check-label" htmlFor="questionFive2">No</label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q6: A What volumes of traffic does your use case need to manage? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionSix" id="questionSix1" value="0-5000" />
                                    <label className="form-check-label" htmlFor="questionSix1">0-5000</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionSix" id="questionSix2" value="5000-10000" />
                                    <label className="form-check-label" htmlFor="questionSix2">5000-10000</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionSix" id="questionSix3" value="Over 10000 " />
                                    <label className="form-check-label" htmlFor="questionSix3">Over 10000 </label>
                                </div>
                            </div>
                        </div>
                        <div className='question-item'>
                            <p className='question'>Q7: Is scalability required to support changes in traffic volume? <span className='text-danger'>*</span></p>
                            <div >
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionSeven" id="questionSeven1" value="Yes" />
                                    <label className="form-check-label" htmlFor="questionSeven1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange} className="form-check-input" type="radio" name="questionSeven" id="questionSeven2" value="No" />
                                    <label className="form-check-label" htmlFor="questionSeven2">No</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-4'>
                    <AppCodeDropdown />
                </div>
            </div>
            <div className='d-none'>
                <footer className='modal-footer gap-3 border-top-0 px-0 pb-0'>
                    <button onClick={handleClose} className='btn btn-outline-primary text-uppercase' >cancel</button>
                    <button disabled={disabled} className='btn btn-primary text-uppercase' onClick={handleClickOpenChildModal}>go to next</button>
                </footer>
                <div>
                    <ChildModal childModal={childModal} closeChildModal={closeChildModal} primaryTxt={primaryTxt} secondaryTxt={secondaryTxt} title='recommended' />
                </div>
            </div>
        </div>
    )
}
