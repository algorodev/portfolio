import AboutSection from '../components/sections/About/About.tsx'
import HeroSection from '../components/sections/Hero/Hero.tsx'
import ProjectsSection from '../components/sections/Projects/Projects.tsx'
import './Home.scss'

const Home = () => (
	<main className="main-container">
		<section className="section-container">
			<HeroSection/>
		</section>

		<section className="section-container">
			<h2 className="section-title">About me</h2>
			<AboutSection/>
		</section>

		<section className="section-container">
			<h2 className="section-title">Projects</h2>
			<ProjectsSection/>
		</section>
	</main>
)

export default Home
