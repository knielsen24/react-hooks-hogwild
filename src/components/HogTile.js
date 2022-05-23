import React, { useState } from 'react'
import HogDetails from './HogDetails'

function HogTile({
	name,
	image,
	weight,
	specialty,
	greased,
	medal,
}) {

	const [pigDetails, setPigDetails] = useState(false)
	const [hideHog, setHideHog] = useState(false)

	const handleClick = () => setPigDetails(!pigDetails)

	const handleHide = () => setHideHog(!hideHog)

	return (
		<div onClick={handleClick} className='pigTile'>
			<h3>{name}</h3>
			{hideHog === false ?
				<>
					<img src={image} className="minPigTile" />
					<div>
						<button onClick={handleHide} >Hide Hog</button>
					</div>
					{pigDetails === false ? null :
						<HogDetails
							specialty={specialty}
							weight={weight}
							greased={greased}
							medal={medal}
						/>}
				</> : <><button onClick={handleHide} > Show Hog</button></>
			}
		</div>
	)
}

export default HogTile