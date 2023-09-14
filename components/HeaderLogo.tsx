'use client'

import React from 'react'
import Image from 'next/image'

export default function HeaderLogo() {
	return (
		<Image
			src={require('../assets/logo.svg')}
			alt='Logo'
			width={120}
			priority
		/>
	)
}
