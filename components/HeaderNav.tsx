'use client'

import React, { useMemo, useState } from 'react'
import styles from './Header.module.scss'

export default function HeaderNav() {
	const [navActive, setNavActive] = useState([true, false, false])

	const navClasses = useMemo(() => {
		return [
			`${styles.listItem} ${navActive[0] ? styles.navItemActive : ''}`,
			`${styles.listItem} ${navActive[1] ? styles.navItemActive : ''}`,
			`${styles.listItem} ${navActive[2] ? styles.navItemActive : ''}`,
		]
	}, [navActive])

	return (
		<nav className={styles.navContainer}>
			<ul className={styles.navList}>
				<li
					className={navClasses[0]}
					onClick={() => setNavActive([true, false, false])}
				>
					Главная
				</li>
				<li
					className={navClasses[1]}
					onClick={() => setNavActive([false, true, false])}
				>
					Товары
				</li>
				<li
					className={navClasses[2]}
					onClick={() => setNavActive([false, false, true])}
				>
					О нас
				</li>
			</ul>
		</nav>
	)
}
