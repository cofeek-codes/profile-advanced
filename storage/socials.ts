export interface Social {
	_id: string
	gradient: {
		from: string
		to: string
	}
	icon: {
		path: string
		width: number
	}
	link: string
	title: string
}
export const socials: Social[] = [
	// vk
	{
		_id: 'l_1',
		gradient: {
			from: '#090979',
			to: '#0395d5',
		},
		icon: {
			path: '/icons/vk.svg',
			width: 30,
		},
		link: 'https://vk.com/cofeek_codes',
		title: 'VK',
	},
	// youtube
	{
		_id: 'l_2',
		gradient: {
			from: '#000000',
			to: '#ff0000',
		},
		icon: {
			path: '/icons/youtube-icon.svg',
			width: 30,
		},
		link: 'https://www.youtube.com/channel/UCB6ThArmGoV9ulDKz-JP2ng',
		title: 'YouTube',
	},
	// profile
	{
		_id: 'l_3',
		gradient: {
			from: '#000000',
			to: '#ffffff',
		},
		icon: {
			path: '/avatar.jpg',
			width: 30,
		},
		link: 'https://cofeek-codes.online',
		title: 'Profile',
	},

	// github
	{
		_id: 'l_4',
		gradient: {
			from: '#000000',
			to: '#ffffff',
		},
		icon: {
			path: '/icons/github.svg',
			width: 30,
		},
		link: 'https://github.com/cofeek-codes/',
		title: 'Github',
	},
]
