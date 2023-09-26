import useHeader from './useHeader.tsx'
import './Header.scss'

const Header = () => {
	const { onContactButtonClick, onResumeButtonClick } = useHeader()

	return (
		<header className="header">
			<section className="header__container header__container--left">
				<a href="#top">
					<h3 className="text-3xl">LOGO</h3> {/* TODO: SET LOGO */}
				</a>
			</section>
			<section className="header__container header__container--right">
				<a href="#education" target="_self" className="header__link">
					Education
				</a>
				<a href="#experience" className="header__link">
					<p>Experience</p>
				</a>
				<a href="#about" className="header__link">
					<p>About</p>
				</a>
				<button id="contact_button" className="header__button" onClick={onContactButtonClick}>
					<label htmlFor="contact_button">Contact</label>
				</button>
				<button id="resume_button" className="header__button" onClick={onResumeButtonClick}>
					<label htmlFor="resume_button">Resume</label>
				</button>
			</section>
		</header>
	)
}

export default Header
