import React from 'react'

export default function SingleData(props) {
    const {appCode, requestId, useCaseSummary, services, requstedBy, submittedOn, status} = props.data
  return (
    <tr>
        <td className='table-td'>{appCode}</td>
        <td className='table-td'>{requestId}</td>
        <td className='table-td'>{useCaseSummary}</td>
        <td className='table-td'>{services}</td>
        <td className='table-td'>{requstedBy}</td>
        <td className='table-td'>{submittedOn}</td>
        <td className='table-td lh-1'>
          <div className={status === 'Non-PROD Qualification' ? 'badge bg-primary': status === 'Draft' ? 'badge bg-info':status === 'PROD Readiness' ? 'badge bg-danger':'' }>{status}</div>
          </td>
    </tr>
  )
}
