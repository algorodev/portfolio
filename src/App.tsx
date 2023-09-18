import Header from './components/Header/Header.tsx'
import './App.scss'

const App = () => (
	<main id="top" className="screen">
		<section className="screen__container screen__container--header">
			<Header/>
		</section>
		<section className="screen__container screen__container--content">
			<p>Content</p>
		</section>
	</main>
)

export default App
