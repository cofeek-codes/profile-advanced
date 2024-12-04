import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
	// @FIXME: workaround of new wierd nextjs error
	const CustomComoponent = Component as any

	return (
		<ChakraProvider>
			<CustomComoponent {...pageProps} />
			<Analytics />
		</ChakraProvider>
	)
}

export default MyApp
