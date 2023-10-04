import { CertificationDataI, EducationDataI } from '../../../types/data.ts'
import data from '../../../data/education.json'
import './EducationSection.scss'

const EducationSection = () => {
	const degrees: EducationDataI[] = data.degrees
	const certifications: CertificationDataI[] = data.certifications

	return (
		<section className="education__container">
			<h3 className="education__title">Degrees</h3>
			{degrees.map((degree: EducationDataI, index: number) => (
				<div key={`degree-${index}`} className="degree">
					<div className="degree__date-container">
						<p>{degree.date.month}</p>
						<p>{degree.date.year}</p>
					</div>
					<div className="degree__info-container">
						<h3 className="degree__title">{degree.title}, <span className="degree__company">{degree.company}</span></h3>
						{degree.lessons.map((lesson: string, index: number) => (
							<p key={`degree-lesson-${index}`} className="degree__lesson">- {lesson}</p>
						))}
					</div>
				</div>
			))}
			<h3 className="education__title">Certifications</h3>
			{certifications.map((certification: CertificationDataI, index: number) => (
				<div key={`certification-${index}`} className="certification">
					<div className="certification__date-container">
						<p>{certification.year}</p>
					</div>
					<div className="certification__info-container">
						<h3 className="certification__title">{certification.title}</h3>
					</div>
				</div>
			))}
		</section>
	)
}

export default EducationSection
