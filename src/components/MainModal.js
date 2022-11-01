import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdClear } from "react-icons/md";

import SearchAppCode from './appCode/SearchAppCode';
import SelfAssessment from './selfAssessment/Index';



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
                <MdClear className='icon-lg text-white cursor-pointer'  onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>
                {/* <SearchAppCode handleClose={handleClose} /> */}
                <SelfAssessment handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    </div>
  );
}