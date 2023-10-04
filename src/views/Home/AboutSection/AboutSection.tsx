import { AboutDataI } from '../../../types/data.ts'
import data from '../../../data/about.json'
import './AboutSection.scss'

const AboutSection = () => {
	const about: AboutDataI = data.about

	return (
		<section className="about__container">
			<h3 className="about__title">About</h3>
			<div className="about-me">
				<div className="about-me__container">
					<h2 className="about-me__title">{about.fullName}</h2>
					<p className="about-me__subtitle">{about.position}</p>
				</div>
				<div className="about-me__container">
					{about.biography.map((text: string, index: number) => (
						<p key={`about-${index}`} className="about-me__biography">{text}</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutSection
