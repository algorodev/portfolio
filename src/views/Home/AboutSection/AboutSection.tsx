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
					<h3 className="about-me__title">{about.fullName}</h3>
					<p className="about-me__subtitle">{about.position}</p>
				</div>
				<div className="about-me__container">
					{about.biography.map((text: string) => (
						<p className="about-me__biography">{text}</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutSection