import EducationSection from './EducationSection/EducationSection.tsx'
import AboutSection from './AboutSection/AboutSection.tsx'
import './Home.scss'

const Home = () => (
	<section className="home">
		<div id="about" className="about">
			<AboutSection />
		</div>
		<div id="education" className="education">
			<EducationSection />
		</div>
	</section>
)

export default Home
