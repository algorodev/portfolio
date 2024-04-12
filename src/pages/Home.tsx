import { useTranslation } from 'react-i18next'
import TranslationButton from '../components/layout/TranslationButton/TranslationButton.tsx'
import AboutSection from '../components/sections/About/About.tsx'
import HeroSection from '../components/sections/Hero/Hero.tsx'
import PostsSection from '../components/sections/Posts/Posts.tsx'
import ProjectsSection from '../components/sections/Projects/Projects.tsx'
import './Home.scss'

const Home = () => {
	const { i18n } = useTranslation()

	return (
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

			<section className="section-container">
				<h2 className="section-title">Posts</h2>
				<PostsSection/>
			</section>

			<TranslationButton language={i18n.language === 'en' ? 'es' : 'en'}/>
		</main>
	)
}

export default Home
