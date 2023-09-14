import { Flower } from '@/utils/types'
import React from 'react'
import FlowerItem from '../FlowerItem/FlowerItem'
import './Flowers.scss'
import SortSelect from '../SortSelect/SortSelect'

type Props = {
	flowers: Flower[]
}
export default function Flowers(props: Props) {
	const { flowers } = props
	return (
		<section className='flowerItemsContainer'>
			{flowers.map((flower: Flower) => (
				<>
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
					<FlowerItem key={flower.product_id} flower={flower} />
				</>
			))}
		</section>
	)
}
