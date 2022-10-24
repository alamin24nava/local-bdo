import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdClear } from "react-icons/md";
export default function MainModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <div className='create-board'>
            <Button variant="primary" onClick={() => setModalShow(true)}>Create an Onboarding Request</Button>
        </div>
        <Modal show={modalShow} size="lg" centered>
            <Modal.Header className='bg-primary'>
                <Modal.Title className='title-lg'>Create an Onboarding Request</Modal.Title>
                <MdClear className='icon-lg text-white cursor-pointer'  onClick={() => setModalShow(false)} />
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer className='gap-3 border-top-0'>
                <Button className='btn-outline-primary' onClick={() => setModalShow(false)}>Cancel</Button>
                <Button className=''>Go to next</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}