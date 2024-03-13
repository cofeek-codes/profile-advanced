/* eslint-disable react/react-in-jsx-scope */
import { HamburgerIcon } from '@chakra-ui/icons'
import {
	Box,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
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
							<div>
								<Link href='/'>Home</Link>
							</div>
						</li>
						<li>
							<div>
								<Link href='/projects'>Projects</Link>
							</div>
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
								<Link href={'/'}>
									<Box style={{ fontWeight: 'bold', width: "100%" }}>
										Home
									</Box>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href={'/projects'}>
									<Box style={{ fontWeight: 'bold', width: "100%" }}>
										Projects
									</Box>
								</Link>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</header>
	)
}

export default Header
