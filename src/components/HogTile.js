import React, { useState } from 'react'
import HogDetails from './HogDetails'

function HogTile({ name, image, weight, specialty, greased, medal }) {

	const [pigDetails, setPigDetails] = useState(false)

	const  handleClick = () => setPigDetails(!pigDetails)

	return (
		<div onClick={handleClick} className='pigTile'>
			<h3>{name}</h3>
			<img src={image} className="minPigTile" />
			{ pigDetails === false ? null :
				<HogDetails
					specialty={specialty}
					weight={weight}
					greased={greased}
					medal={medal}
				/>
			}
		</div>
	)
}

export default HogTile