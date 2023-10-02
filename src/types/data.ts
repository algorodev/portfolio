export interface AboutDataI {
	fullName: string
	position: string
	biography: string[]
}

export interface ExperienceDataI {
	date: {
		start: string
		end: string
	}
	job: {
		title: string
		company: string
	}
	technologies: string[]
	description: string
}

export interface EducationDataI {
	date: {
		month: string
		year: number
	}
	title: string
	company: string
	lessons: string[]
}

export interface CertificationDataI {
	year: number
	title: string
}
