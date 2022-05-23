import React from 'react'

function HogDetails({ weight, specialty, greased, medal }) {
	return (
		<div>
			<ul className='ul'>Specialty: {specialty}</ul>
			<ul className='ul'>Weight: {weight} lbs</ul>
			<ul className='ul'>Greased: {greased ? "YES" : "NO"}</ul>
			<ul className='ul'>Highest Achievement: {medal[0].toUpperCase() + medal.substring(1)} Medal
			</ul>
		</div>
	)
}

export default HogDetails