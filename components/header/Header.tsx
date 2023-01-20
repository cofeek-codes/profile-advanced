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
import { useRouter } from 'next/router'
const Header = () => {
	const router = useRouter()
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image
						src='/cofeek-logo.svg'
						width='147'
						height='77'
						alt='Logo'
						onClick={e => {
							router.push('/')
						}}
					/>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<motion.div
								whileHover={{
									borderBottom: '3px solid #fff',
									paddingBottom: 5,
								}}
							>
								<Link href='/'>Home</Link>
							</motion.div>
						</li>
						<li>
							<motion.div
								whileHover={{
									borderBottom: '3px solid #fff',
									paddingBottom: 5,
								}}
							>
								<Link href='/projects'>Projects</Link>
							</motion.div>
						</li>
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
							<MenuItem>
								<Box style={{ fontWeight: 'bold' }}>
									<Link href={'/'}>Home</Link>
								</Box>
							</MenuItem>
							<MenuItem>
								<Box style={{ fontWeight: 'bold' }}>
									<Link href={'/projects'}>Projects</Link>
								</Box>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</header>
	)
}

export default Header
