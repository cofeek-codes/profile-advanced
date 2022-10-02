import Image from 'next/image'
import React from 'react'
import { Social } from '../../storage/socials'

import styles from './grid.module.scss'
type Props = {
	social: Social
}
const GridItem = ({ social }: Props) => {
	return (
		<a
			href={social.link}
			target='_blank'
			rel='noreferrer'
			className={styles.item}
		>
			<div
				className={styles['item-wrapper']}
				style={{
					backgroundImage: `linear-gradient(to right, ${social.gradient.from} 0%, ${social.gradient.to} 51%, ${social.gradient.from} 100%)`,
				}}
			>
				<div className={styles.icon}>
					<Image
						src={social.icon.path}
						alt={`${social.title} icon`}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{social.title}</div>
			</div>
		</a>
	)
}

export default GridItem
