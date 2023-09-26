export interface AboutDataI {
	fullName: string
	position: string
	biography: string[]
}

export interface EducationDataI {
	date: {
		month: string
		year: number
	}
	title: string,
	company: string,
	lessons: string[]
}

export interface CertificationDataI {
	year: number
	title: string
}
