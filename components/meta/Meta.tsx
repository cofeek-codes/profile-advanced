import Head from 'next/head'
import React from 'react'
import constants from '../../constants'
type Props = {
	title: string
	description: string
	url: string
}
const Meta = ({ title, description, url }: Props) => {
	return (
		<Head>
			{/* <!-- HTML Meta Tags --> */}
			<title>{title}</title>
			<meta name='author' content='cofeek-codes' />
			<meta name='description' content={description} />
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			{/* <!-- Google / Search Engine Tags --> */}
			<meta itemProp='name' content={title} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content={`${constants.URL}/avatar.jpg`} />
			<meta
				name='google-site-verification'
				content='kA7TQQbsijFYi1kZ5_IZGYvvvQPrnYlwiV9bFIhOP-Y'
			/>
			{/* <!-- Facebook Meta Tags --> */}
			<meta property='og:url' content={constants.URL} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={`${constants.URL}/avatar.jpg`} />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={`${constants.URL}/avatar.jpg`}></meta>
			{/* <!-- Links --> */}
			<link rel='canonical' href={url} />
		</Head>
	)
}

export default Meta
