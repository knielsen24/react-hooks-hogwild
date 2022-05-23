import React from 'react'
import HogTile from './HogTile'

function HogContainer({ hogs, isCheck }) {

	
	const filteredPigs = hogs.filter(hog => {
		if (isCheck === false) return hogs
		else if (isCheck === true) return (hog.greased === true)
	})
	
	const renderTile = filteredPigs.map((hog) => {
		const {name, image, weight, specialty, greased, "highest medal achieved": medal } = hog
		return <HogTile
			name={name}
			image={image}
			weight={weight}
			specialty={specialty}
			greased={greased}
			medal={medal}
	/>
	})  
	
	return (
		<div >
			<h2 className='smallHeader'></h2>
			{renderTile}
		</div>
	)
}

export default HogContainer