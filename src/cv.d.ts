export interface CV {
	hero: Hero
	about: About
	projects: Project[]
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

interface Project {
	name: string
	url: string
	description: string
	highlights: string[]
}
