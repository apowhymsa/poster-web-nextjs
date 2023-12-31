'use client'

import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useAnimate } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { CloseCircle } from 'iconsax-react'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { height, width } = useWindowDimensions()
	const [scope, animate] = useAnimate()
	const [burgerActive, setBurgerActive] = useState(false)
	const [navActive, setNavActive] = useState([true, false, false])

	const navClasses = useMemo(() => {
		return [
			`${navActive[0] ? 'activeHeaderMenuItem' : ''}`,
			`${navActive[1] ? 'activeHeaderMenuItem' : ''}`,
			`${navActive[2] ? 'activeHeaderMenuItem' : ''}`,
		]
	}, [navActive])

	useEffect(() => {
		console.log('changed')
		if (burgerActive) {
			const enterAnimation = async () => {
				await animate(scope.current, { display: 'block' })
				await animate(
					scope.current,
					{ height: '100vh', opacity: 1 },
					{
						duration: 0.2,
						type: 'spring',
						damping: 10,
						mass: 0.75,
						stiffness: 100,
					}
				)
			}

			enterAnimation()
		} else {
			const exitAnimation = async () => {
				await animate(
					scope.current,
					{ height: 0, opacity: 0 },
					{
						duration: 0.2,
						type: 'spring',
						damping: 10,
						mass: 0.75,
						stiffness: 100,
					}
				)
				await animate(scope.current, { display: 'none' })
			}

			exitAnimation()
		}
	}, [burgerActive])

	return (
		<html lang='en'>
			<body id='body' className={burgerActive ? 'burgerActive' : ''}>
				<Header isActive={burgerActive} setActive={setBurgerActive} />
				<main>{children}</main>
				<div id='burgerMenuPortal'></div>
				{width <= 991 ? (
					<div className='headerBurgerContent' ref={scope}>
						<nav>
							<ul>
								<li
									className={`${navClasses[0]}`}
									onClick={() => setNavActive([true, false, false])}
								>
									Главная
								</li>
								<li
									className={`${navClasses[1]}`}
									onClick={() => setNavActive([false, true, false])}
								>
									Товары
								</li>
								<li
									className={`${navClasses[2]}`}
									onClick={() => setNavActive([false, false, true])}
								>
									О нас
								</li>
							</ul>
						</nav>
						<span
							className='burgerCloseBtn'
							role='button'
							onClick={() => setBurgerActive(false)}
						>
							<CloseCircle size='32' color='black' />
						</span>
					</div>
				) : null}
			</body>
		</html>
	)
}
