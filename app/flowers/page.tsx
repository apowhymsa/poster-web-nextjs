import { Suspense } from 'react'
import Loading from './loading'
import { Flower } from '@/utils/types'
import FlowerItem from '@/components/FlowerItem/FlowerItem'
import Flowers from '@/components/Flowers/Flowers'
import './FlowersPage.scss'
import SortSelect from '@/components/SortSelect/SortSelect'

async function getData() {
	const res = await fetch('http:localhost:3000/api/flowers')

	return await res.json()
}

export default async function Page() {
	const flowers = await getData()

	return (
		<div className='productsContainer'>
			<aside>Filter</aside>
			<div>
				<div className='productsTopContent'>
					<SortSelect />
				</div>

				<Flowers flowers={flowers.response} />
			</div>
		</div>
	)
}
