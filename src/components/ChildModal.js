import React, { useState } from 'react'
import { MdClear } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';


export default function ChildModal(props) {
    const {childModal, closeChildModal, title, primaryTxt, secondaryTxt} = props
    return (
        <Modal show={childModal} size="sm" centered>
            <Modal.Header className='border-0'>
                <Modal.Title className='title-md text-dark'>{title}</Modal.Title>
                <div onClick={closeChildModal} className="cursor-pointer">
                    <MdClear className='fs-4' />
                </div>
            </Modal.Header>
            <Modal.Body>
                <p>{primaryTxt}</p>
                <p>{secondaryTxt}</p>
            </Modal.Body>
            <Modal.Footer className='border-0 gap-3 px-4 py-3'>
                <button className='btn btn-sm btn-outline-primary' onClick={closeChildModal}>Cancel Request</button>
                <button className='btn btn-sm btn-primary'>Continue</button>
            </Modal.Footer>
        </Modal>
    )
}
