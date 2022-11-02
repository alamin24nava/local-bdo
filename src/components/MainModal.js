import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdClear } from "react-icons/md";

import SearchAppCode from './appCode/SearchAppCode';
import SelfAssessment from './selfAssessment/Index';
import Services from './services/Index'
import HorizontalStepper from './HorizontalStepper';
import StepperControl from './StepperControl';



export default function MainModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () =>{
        setModalShow(false)
    }
    const handleOpen = () =>{
        setModalShow(true)
    }
  return (
    <div>
        <div className='create-board'>
            <Button variant="primary" onClick={handleOpen}>Create an Onboarding Request</Button>
        </div>
        <Modal show={modalShow} size="lg" centered>
            <Modal.Header className='bg-primary'>
                <Modal.Title className='title-lg'>Create an Onboarding Request</Modal.Title>
                <button onClick={handleClose} className='btn text-white p-0'>CANCEL</button>
            </Modal.Header>
            <Modal.Body>
                {/* <SearchAppCode handleClose={handleClose} /> */}
                {/* <SelfAssessment handleClose={handleClose} /> */}
                {/* <Services /> */}
                <HorizontalStepper handleClose ={handleClose} />
            </Modal.Body>
        </Modal>
    </div>
  );
}