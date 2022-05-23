import React from 'react'

function Filter({ onHandleCheckBox, onHandleSort }) {
	return (
		<nav>
			<span>Sort Hogs by </span>
			<select>
				<option value="default" >Select</option>
				<option onChange={onHandleSort} value="name" >Name</option>
				<option onChange={onHandleSort} value="weight" >Weight</option>
			</select>
			<div>
				<label>Greased Hogs Only </label>
				<input type="checkbox" onChange={onHandleCheckBox}></input>
			</div>
		</nav>
	)
}

export default Filter