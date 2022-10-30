import React from 'react'

export default function ModalFooter(props) {
    const cancel = props.cancel
    const next = props.next
    const disabled = props.disabled
  return (
    <footer className='modal-footer gap-3 border-top-0 px-0 pb-0'>
        <button className='btn btn-outline-primary' >{cancel}</button>
        <button disabled={disabled} className='btn btn-primary'>{next}</button>
    </footer>
  )
}
