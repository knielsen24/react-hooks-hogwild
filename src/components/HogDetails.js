import React from 'react'

function HogDetails({ weight, specialty, greased, medal}) {
	return (
		<div>
			<ul>
				<li>Specialty: {specialty}</li>
				<li>Weight: {weight}</li>
				<li>I am greased </li>
				<li>{medal}</li>
			</ul>
		</div>
	)
}

export default HogDetails