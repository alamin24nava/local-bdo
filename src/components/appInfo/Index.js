import React from 'react'

export default function AppInfo(props) {
	const handleChange = props.handleChange
	return (
		<div className='display-step-content-left'>
			<h4 className='title-lg text-dark pb-3'>Provide more information regarding your application</h4>
			<form>
				<div className="mb-3">
					<label htmlFor="useCaseSummary" className="form-label">Use Case Summary</label>
					<input type="text" className="form-control w-50" id="useCaseSummary" placeholder='Type your text here' name='useCaseSummary' onChange={handleChange} />
				</div>
				<div className="mb-3">
					<label htmlFor="useCaseDetails" className="form-label">Use Case Details</label>
					<textarea className="form-control w-50" id="useCaseDetails" rows="5"></textarea>
				</div>
				<div className="mb-3">
					<p className='question'>Does this use case involve or interact with third party software/services?</p>
					<div >
						<div className="form-check form-check-inline">
							<input onChange={handleChange} className="form-check-input" type="radio" name="thirdPartySoftware" id="thirdPartySoftware1" value='Yes' />
							<label className="form-check-label" htmlFor="thirdPartySoftware1">Yes</label>
						</div>
						<div className="form-check form-check-inline">
							<input onChange={handleChange} className="form-check-input" type="radio" name="thirdPartySoftware" id="thirdPartySoftware2" value="No" />
							<label className="form-check-label" htmlFor="thirdPartySoftware2">No</label>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="nonProdBudget" className="form-label">Non -Prod Monthly Budget</label>
					<input type="text" className="form-control w-50" id="nonProdBudget" placeholder='Type numeric value here' />
				</div>
				<div className="mb-3">
					<label htmlFor="prodBudget" className="form-label">Prod Monthly Budget</label>
					<input type="text" className="form-control w-50" id="prodBudget" placeholder='Type numeric value here' />
				</div>
				<div className="mb-3">
					<label htmlFor="assignmentGroup" className="form-label">ServiceNow Assignment Group</label>
					<input type="text" className="form-control w-50" id="assignmentGroup" placeholder='Type here' />
				</div>
				<div className="mb-3">
					<label htmlFor="dosaNumber" className="form-label">Data Services Used: DOSA number</label>
					<input type="text" className="form-control w-50" id="dosaNumber" placeholder='Type here' />
				</div>
				<div className="mb-3">
					<label htmlFor="dataSteward" className="form-label">Data Steward</label>
					<input type="text" className="form-control w-50" id="dataSteward" placeholder='Search for RBC Employee here' />
				</div>
				<div className="mb-3">
					<label htmlFor="dataOwner" className="form-label">Data Owner</label>
					<input type="text" className="form-control w-50" id="dataOwner" placeholder='Search for RBC Owner here' />
				</div>
			</form>
		</div>
	)
}
