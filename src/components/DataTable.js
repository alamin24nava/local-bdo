import React from 'react'
import DataModel from '../Model/DataModel'
import SingleData from './appCode/SingleData'

const dataList = [
    DataModel('XD98', '13252','Project name, initiative summar...', 'Service 1, Service 2', 'Tailor Smith', 'July 27, 2022', 'Non-PROD Qualification'),
    DataModel('XD96', '13252','Project name, initiative summar...', 'Service 1, Service 2', 'Tailor Smith', 'July 27, 2022', 'Draft'),
    DataModel('XD92', '13252','Project name, initiative summar...', 'Service 1, Service 2', 'Tailor Smith', 'July 27, 2022', 'PROD Readiness'),
    DataModel('XD99', '13252','Project name, initiative summar...', 'Service 1, Service 2', 'Tailor Smith', 'July 27, 2022', 'Non-PROD Qualification')
]
export default function DataTable() {
    return (
        <div>
            <h4 className='title-lg text-dark'>Requests (3)</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th className='table-th' scope="col">App Code</th>
                        <th className='table-th' scope="col">Request ID</th>
                        <th className='table-th' scope="col">Use Case Summary</th>
                        <th className='table-th' scope="col">Services</th>
                        <th className='table-th' scope="col">Requsted By</th>
                        <th className='table-th' scope="col">Submitted On</th>
                        <th className='table-th' scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList.map((data)=>(
                            <SingleData key={data.appCode} data = {data} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
