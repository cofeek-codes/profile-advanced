/* eslint-disable react/react-in-jsx-scope */
import {
	Box,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import logo from '../../assets/cofeek-logo.svg'
import styles from './header.module.scss'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
	const links = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/projects',
			name: 'Projects',
		},
	]
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href='/'>
						<Image src={logo} alt='Logo' />
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul>
						{links.map(({ href, name }) => (
							<li key={name}>
								<motion.div
									whileHover={{
										borderBottom: '3px solid #fff',
										paddingBottom: 5,
									}}
								>
									<Link href={href}>{name}</Link>
								</motion.div>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.burger}>
					<Menu>
						<MenuButton
							color='white'
							_expanded={{ color: 'black' }}
							_hover={{ color: 'black', bg: 'white' }}
							as={IconButton}
							icon={<HamburgerIcon />}
							aria-label='Options'
							variant='outline'
						/>
						<MenuList>
							{links.map(({ href, name }) => (
								<MenuItem key={name}>
									<Box style={{ fontWeight: 'bold' }}>
										<Link href={href}>{name}</Link>
									</Box>
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				</div>
			</div>
		</header>
	)
}

export default Header
