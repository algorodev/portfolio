import EducationSection from './EducationSection/EducationSection.tsx'
import AboutSection from './AboutSection/AboutSection.tsx'
import './Home.scss'
import ContactSection from './ContactSection/ContactSection.tsx'

const Home = () => (
	<section className="home">
		<div id="about" className="about">
			<AboutSection />
		</div>
		<div id="contact" className="contact">
			<ContactSection />
		</div>
		<div id="education" className="education">
			<EducationSection />
		</div>
	</section>
)

export default Home
