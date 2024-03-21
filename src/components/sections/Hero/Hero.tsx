import GitHubIcon from '../../icons/GitHub.tsx'
import LinkedInIcon from '../../icons/LinkedIn.tsx'
import MailIcon from '../../icons/Mail.tsx'
import PhoneIcon from '../../icons/Phone.tsx'
import TwitterIcon from '../../icons/Twitter.tsx'
import WorldIcon from '../../icons/World.tsx'
import { hero } from '../../../data/cv.json'
import './Hero.scss'

const HeroSection = () => (
	<section className="container">
		<div className="info-container">
			<h1 className="name">{hero.name}</h1>
			<h2 className="title">{hero.label}</h2>
			<span className="location">
					<WorldIcon/>
				{hero.born}
				</span>
			<footer className="social-container">
				<a className="social-button"
				   href={`mailto:${hero.email}`}
				   title={`Send an email to ${hero.email}`}
				   target="_blank"
				   rel="noopener noreferrer">
					<MailIcon/>
				</a>
				<a className="social-button"
				   href={`tel:${hero.phone}`}
				   title={`Call ${hero.email}`}
				   target="_blank"
				   rel="noopener noreferrer">
					<PhoneIcon/>
				</a>
				<a className="social-button"
				   href={hero.twitterUrl}
				   title="Visit Twitter profile"
				   target="_blank">
					<TwitterIcon/>
				</a>
				<a className="social-button"
				   href={hero.linkedInUrl}
				   title="Visit LinkedIn profile"
				   target="_blank">
					<LinkedInIcon/>
				</a>
				<a className="social-button"
				   href={hero.gitHubUrl}
				   title="Visit GitHub profile"
				   target="_blank">
					<GitHubIcon/>
				</a>
			</footer>
		</div>
		<figure className="image-container">
			<img className="image" src={hero.imagePath} alt={hero.name}/>
		</figure>
	</section>
)

export default HeroSection
