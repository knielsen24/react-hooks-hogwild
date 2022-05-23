import React from 'react'

function Filter({ onHandleCheckBox, onHandleSort }) {
	return (
		<nav>
			<span className='filterWrapper'>Sort Hogs by </span>
			<select onChange={onHandleSort}>
				{/* <option value="default" >Select</option> */}
				<option value="name" >Name</option>
				<option value="weight" >Weight</option>
			</select>
			<div>
				<label>Greased Hogs Only </label>
				<input type="checkbox" onChange={onHandleCheckBox}></input>
			</div>
		</nav>
	)
}

export default Filter