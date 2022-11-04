// React Components
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Custom Components
import SearchAppCode from './appCode/SearchAppCode';
import HorizontalStepper from './HorizontalStepper';

export default function MainModal(props) {
    const [modalShow, setModalShow] = useState(false);
    const [showHorizontalStep, setShowHorizontalStep] = useState(false);
    const [hideAppCode, setHideAppCode] = useState(true);
    const [appCode, setAppCode] = useState('')
    const handleClose = () =>{
        setModalShow(false)
    }
    const handleOpen = () =>{
        setModalShow(true)
    }
    const handleClick = () =>{
        setHideAppCode(false)
        setShowHorizontalStep(true)
    }
    const handleAppCode = (appcode) => {
        setAppCode(appcode)
    }       

    useEffect(() => {
        const handleAppCode = (appcode) => {
            setAppCode(appcode)
        }  
    }, [handleAppCode])
    
 
  return (
    <div>
        <div className='create-board'>
            <Button variant="primary" onClick={handleOpen}>Create an Onboarding Request</Button>
        </div>
        <Modal show={modalShow} size="lg" centered>
            <Modal.Header className='bg-primary'>
                <Modal.Title className='title-lg'>Create an Onboarding Request {` - ${appCode}`}</Modal.Title>
                <button onClick={handleClose} className='btn text-white p-0'>CANCEL</button>
            </Modal.Header>
            <Modal.Body>
                {
                   hideAppCode && <SearchAppCode handleClick={handleClick} handleClose={handleClose} onAppCode = {handleAppCode} />
                }
                {
                    showHorizontalStep && <HorizontalStepper handleClose ={handleClose} />
                }
            </Modal.Body>
        </Modal>
    </div>
  );
}