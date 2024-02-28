import EducationSection from './EducationSection/EducationSection.tsx'
import AboutSection from './AboutSection/AboutSection.tsx'
import ContactSection from './ContactSection/ContactSection.tsx'
import ExperienceSection from './ExperienceSection/ExperienceSection.tsx'
import './Home.scss'

const Home = () => (
	<section className="home">
		<div id="about" className="about">
			<AboutSection />
		</div>
		<div id="contact" className="contact">
			<ContactSection />
		</div>
		<div id="experience" className="experience">
			<ExperienceSection />
		</div>
		<div id="education" className="education">
			<EducationSection />
		</div>
	</section>
)

export default Home
