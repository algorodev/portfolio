import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import useHeader from './useHeader.tsx'
import './Header.scss'

const Header = () => {
	const { onResumeButtonClick } = useHeader()

	return (
		<header className="header">
			<section className="header__container header__container--left">
				<h3 className="text-3xl">LOGO</h3> {/* TODO: SET LOGO */}
			</section>
			<section className="header__container header__container--right">
				<a href="#about" className="header__link">
					<p>About</p>
				</a>
				<a href="#contact" className="header__link">
					<p>Contact</p>
				</a>
				<a href="#experience" className="header__link">
					<p>Experience</p>
				</a>
				<a href="#education" target="_self" className="header__link">
					<p>Education</p>
				</a>
				<button id="resume_button" className="header__button" onClick={onResumeButtonClick}>
					<ArrowDownTrayIcon className="icon" />
					<label htmlFor="resume_button">Resume</label>
				</button>
			</section>
		</header>
	)
}

export default Header
