'use client'

import React, { useState } from 'react'
import styles from './Header.module.scss'

type Props = {
	isActive: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}
export default function HeaderBurger(props: Props) {
	const { isActive, setActive } = props
	return (
		<div
			className={styles.headerBurger}
			role='button'
			onClick={() => setActive(prev => !prev)}
		>
			<div className={styles.burgerWrapper}></div>
		</div>
	)
}
