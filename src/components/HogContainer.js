import React from 'react'
import HogTile from './HogTile'

function HogContainer({ hogs }) {

	const renderTile = hogs.map((hog) => {
		const { name, image, weight, specialty, greased, "highest medal achieved": medal } = hog
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
		<div className='ui grid container' className='ui eight wide column'>
			<h2 className='smallHeader'></h2>
			{renderTile}
		</div>
	)
}

export default HogContainer