import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import MainModal from './components/MainModal';

function App() {

  return (
    <div>
      <MainModal />
    </div>

  )
}

export default App;
