import { Flower } from '@/utils/types'
import React from 'react'
import './FlowerItem.scss'
import Image from 'next/image'
import FavouritesProductButton from '../FavouritesProductButton/FavouritesProductButton'
type Props = {
	flower: Flower
}

export default function FlowerItem(props: Props) {
	const { flower } = props
	return (
		<div className='flowerItemContainer'>
			<span className='sale'>СКИДКА</span>
			<Image
				src={`https://poster-shop.joinposter.com${flower.photo_origin}`}
				// src={require('../../assets/flower1.png')}
				alt='Flower Image'
				width={0}
				height={0}
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
					objectFit: 'contain',
					borderRadius: '8px',
				}}
				priority
			/>
			<div className='flowerInfo'>
				<span>{flower.product_name}</span>
				<span>₴ {flower.price['1'].slice(0, -2)}</span>
			</div>
			<div className='flowerButtons'>
				<FavouritesProductButton />
				<button className='addToCartButton'>В корзину</button>
			</div>
		</div>
	)
}
