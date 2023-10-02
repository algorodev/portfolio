import { Fragment } from 'react'
import { ExperienceDataI } from '../../../types/data.ts'
import data from '../../../data/experience.json'
import './ExperienceSection.scss'

const ExperienceSection = () => {
	const experiences: ExperienceDataI[] = data.experiences

	return (
		<section className="experience__container">
			<h3 className="experience__title">Experience</h3>
			{experiences.map((experience: ExperienceDataI, index: number) => (
				<div key={`experience-${index}`} className="experience">
					<div className="experience__info-container">
						<h3>{experience.date.start} - {experience.date.end}</h3>
						<h3>{experience.job.title}, <span className="experience__company">{experience.job.company}</span></h3>
					</div>
					<div className="experience__skill-container">
						<p>{experience.description}</p>
						<div className="experience__technologies">
							{experience.technologies.map((technology: string, index: number) => (
								<Fragment key={`technology-${index}`}>
									<p className="technology">{technology}</p>
									{experience.technologies.length > index + 1 && <span>~</span>}
								</Fragment>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	)
}

export default ExperienceSection
