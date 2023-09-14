'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderRightButton from './HeaderRightButton'
import { easeInOut, motion, transform, useAnimate } from 'framer-motion'
import {
	Archive,
	Bag2,
	HambergerMenu,
	Heart,
	MoneyArchive,
	Profile,
	ShoppingCart,
} from 'iconsax-react'
import styles from './Header.module.scss'
import { FiUser } from 'react-icons/fi'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import HeaderBurger from './HeaderBurger'

type Props = {
	isActive: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header(props: Props) {
	const { height, width } = useWindowDimensions()
	const [scope, animate] = useAnimate()
	const { isActive, setActive } = props

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerTop}>
				<HeaderLogo />
				<div className={styles.headerInfo}>
					<a href='tel:+380680000000'>+380-68-000-0000</a>
					<p>feedback@gmail.com</p>
				</div>
			</div>
			<div className={styles.headerBottom}>
				<div className={styles.headerNav}>
					<HeaderNav />
				</div>
				{width <= 991 ? (
					<HeaderBurger isActive={isActive} setActive={setActive} />
				) : null}
				<div className={styles.headerRightButtonContainer}>
					<HeaderRightButton
						icon={<Profile variant='Broken' size={24} color='black' />}
						title='Профиль'
					/>

					<HeaderRightButton
						icon={<Heart variant='Broken' size={24} color='black' />}
						title='Избранные'
					/>
					<HeaderRightButton
						icon={<ShoppingCart variant='Broken' size={24} color='black' />}
						title='Корзина'
					/>
					<HeaderRightButton
						icon={<Archive variant='Broken' size={24} color='black' />}
						title='История заказов'
					/>
				</div>
			</div>
		</header>
	)
}
