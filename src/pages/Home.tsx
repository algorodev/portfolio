import AboutSection from '../components/sections/About/About.tsx'
import HeroSection from '../components/sections/Hero/Hero.tsx'
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
	</main>
)

export default Home
