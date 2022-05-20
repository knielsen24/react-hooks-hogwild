import React from 'react'
import HogDetails from './HogDetails'

function HogTile({ name, image, weight, specialty, greased, medal }) {
	console.log({name})
	
	return (
		<div className='pigTile'>
			<h3>{name}</h3>
			<img src={image} className="minPigTile"/>
			<HogDetails
				specialty={specialty}
				weight={weight}
				greased={greased}
				medal={medal}
			 />
		</div>
	)
}

export default HogTile