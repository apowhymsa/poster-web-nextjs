import React from 'react'
import styles from './Header.module.scss'
import { Tooltip } from '@mui/material'
import { Profile } from 'iconsax-react'

type Props = {
	title: string
	icon: React.ReactNode
}

export default function HeaderRightButton(props: Props) {
	const { icon, title } = props

	return (
		<Tooltip title={title} arrow>
			<div className={styles.headerRightButton}>
				<span className={styles.buttonIcon}>{icon}</span>
			</div>
		</Tooltip>
	)
}
