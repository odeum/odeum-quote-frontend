import React from 'react'

export const handleLink = () => {
	return '/home'
}

export const RenderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code</strong> v0.2.6 © Copyright
			{' '}{date.getFullYear()}
		</div>
	)
}
