import EducationSection from './EducationSection/EducationSection.tsx'
import AboutSection from './AboutSection/AboutSection.tsx'
import './Home.scss'

const Home = () => (
	<section className="home">
		<div className="about">
			<AboutSection />
		</div>
		<div className="education">
			<EducationSection />
		</div>
	</section>
)

export default Home
