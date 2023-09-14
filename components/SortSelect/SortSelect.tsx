'use client'

import React from 'react'
import Select from 'react-select'
import './SortSelect.scss'

const options = [
	{ value: '0', label: 'Популярные' },
	{ value: '1', label: 'По возрастанию' },
	{ value: '2', label: 'По убыванию' },
]

export default function SortSelect() {
	return (
		<div className='sortSelectContainer'>
			<Select options={options} defaultValue={options[0]} />
		</div>
	)
}
