import Header from './components/Header/Header.tsx'
import Home from './views/Home/Home.tsx'
import './App.scss'
import Footer from './components/Footer/Footer.tsx'

const App = () => (
	<main className="screen">
		<section className="screen__container screen__container--header">
			<Header/>
		</section>
		<section className="screen__container screen__container--content">
			<Home />
			<Footer />
		</section>
	</main>
)

export default App
