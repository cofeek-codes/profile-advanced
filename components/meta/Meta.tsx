import Head from 'next/head'
import React from 'react'
type Props = {
	title: string
	description: string
}
const Meta = ({ title, description }: Props) => {
	return (
		<Head>
			{/* <!-- HTML Meta Tags --> */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			{/* <!-- Google / Search Engine Tags --> */}
			<meta itemProp='name' content={title} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content='https://cofeek-codes.online/avatar.jpg' />

			{/* <!-- Facebook Meta Tags --> */}
			<meta property='og:url' content='https://cofeek-codes.online' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta
				property='og:image'
				content='https://cofeek-codes.online/avatar.jpg'
			/>

			{/* <!-- Twitter Meta Tags --> */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta
				name='twitter:image'
				content='https://cofeek-codes.online/avatar.jpg'
			></meta>
		</Head>
	)
}

export default Meta
