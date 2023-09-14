'use client'

import { HeartAdd, HeartSlash } from 'iconsax-react'
import React, { useState } from 'react'
import './FavouritesProductButton.scss'

export default function FavouritesProductButton() {
	const [isFavourites, setFavourites] = useState(false)
	return (
		<div
			role='button'
			className='favouriteButton'
			onClick={() => setFavourites(prev => !prev)}
		>
			{isFavourites ? (
				<HeartSlash variant='Broken' size={24} color='black' />
			) : (
				<HeartAdd variant='Broken' size={24} color='black' />
			)}
		</div>
	)
}
