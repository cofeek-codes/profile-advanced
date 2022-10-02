import React from 'react'

import GridItem from './GridItem'

import styles from './grid.module.scss'
import { Social, socials } from '../../storage/socials'

const Grid = () => {
	return (
		<div className={styles.wrapper__out}>
			<div className={styles.social__title}>My Social Links</div>
			<div className={styles.wrapper}>
				{socials.map(social => (
					<GridItem social={social} key={social._id} />
				))}
			</div>
		</div>
	)
}

export default Grid
