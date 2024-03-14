export interface CV {
	hero: Hero
	about: About
}

interface Hero {
	name: string
	label: string
	born: string
	email: string
	phone: string
	linkedInUrl: string
	gitHubUrl: string
	imagePath: string
}

interface About {
	text: string
}
