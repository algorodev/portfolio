import './Header.scss'
import useHeader from './useHeader.tsx'

const Header = () => {
	const { onContactButtonClick, onResumeButtonClick } = useHeader()

	return (
		<header className="w-full h-full flex">
			<section className="pl-8 w-1/2 h-full flex items-center">
				<a href="#top">
					<h3 className="text-3xl">LOGO</h3>
				</a>
			</section>
			<section className="pr-8 w-1/2 h-full flex justify-end items-center gap-3">
				<a href="#education" target="_self" className="nav__links mx-4">
					Education
				</a>
				<a href="#experience" className="nav__links mx-4">
					<p>Experience</p>
				</a>
				<a href="#about" className="nav__links mx-4">
					<p>About</p>
				</a>
				<button id="contact_button" className="nav__button" onClick={onContactButtonClick}>
					<label htmlFor="contact_button">Contact</label>
				</button>
				<button id="resume_button" className="nav__button" onClick={onResumeButtonClick}>
					<label htmlFor="resume_button">Resume</label>
				</button>
			</section>
		</header>
	)
}

export default Header
