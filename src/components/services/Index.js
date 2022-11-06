import React, { useState } from 'react'
import AppCodeDropdown from '../AppCodeDropdown'
import ServicesDataModel from '../../Model/ServicesDataModel';

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";

export default function Index(props) {
    const handleCount = props.handleCount
    const servicesDataList = [
        ServicesDataModel(1, 'Service 1', 'Canada Central, US East', 'Public', 'AWS', 'Kyvos'),
        ServicesDataModel(2, 'Service 2', 'Canada Central, Canada East', 'RBC Internal', 'Azure', 'Data Pipeline'),
        ServicesDataModel(3, 'Service 3', 'Canada East, US East', 'Confidential', 'AWS', 'Core Pipeline'),
    ]

  return (
    <div className=''>
        <h4 className='title-lg text-dark pb-3'>Choose services you want to add</h4>
        <form className='position-relative mb-4'>
            <input type="text" className="form-control ps-5 w-75" name="servicesGroup" placeholder='Search by Service Name or Group'/>
            <RiSearchLine className='position-absolute top-50 start-3 translate-middle-y text-secondary'/>
        </form>
        <table className="table">
            <thead>
            <tr>
                <th className='table-th'>Service Name</th>
                <th className='table-th'>Region</th>
                <th className='table-th'>Data Classification</th>
                <th className='table-th'>Platform</th>
                <th className='table-th'>Product</th>
                <th className='table-th text-end'>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    servicesDataList.map((servicesData)=>(
                        <tr key={servicesData.id}>
                            <td className='table-td'>{servicesData.serviceName}</td>
                            <td className='table-td'>{servicesData.region}</td>
                            <td className='table-td'>{servicesData.dataClassification}</td>
                            <td className='table-td'>{servicesData.platform}</td>
                            <td className='table-td'>{servicesData.product}</td>
                            <td className='table-td text-end'><FiPlusCircle className='fs-3 p-1 cursor-pointer text-primary' onClick={handleCount} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
