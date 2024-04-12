import { useTranslation } from 'react-i18next'
import GitHubIcon from '../../icons/GitHub.tsx'
import LinkedInIcon from '../../icons/LinkedIn.tsx'
import MailIcon from '../../icons/Mail.tsx'
import PhoneIcon from '../../icons/Phone.tsx'
import TwitterIcon from '../../icons/Twitter.tsx'
import WorldIcon from '../../icons/World.tsx'
import './Hero.scss'

const HeroSection = () => {
	const { t } = useTranslation()

	return (
		<section className="container">
			<div className="info-container">
				<h1 className="name">{t('hero.name')}</h1>
				<h2 className="title">{t('hero.label')}</h2>
				<span className="location">
					<WorldIcon/>
					{t('hero.basedIn')}
				</span>
				<footer className="social-container">
					<a className="social-button"
					   href={`mailto:${t('hero.email')}`}
					   title={`Send an email to ${t('hero.email')}`}
					   target="_blank"
					   rel="noopener noreferrer">
						<MailIcon/>
					</a>
					<a className="social-button"
					   href={`tel:${t('hero.phone')}`}
					   title={`Call ${t('hero.phone')}`}
					   target="_blank"
					   rel="noopener noreferrer">
						<PhoneIcon/>
					</a>
					<a className="social-button"
					   href={t('hero.twitterUrl')}
					   title="Visit Twitter profile"
					   target="_blank">
						<TwitterIcon/>
					</a>
					<a className="social-button"
					   href={t('hero.linkedInUrl')}
					   title="Visit LinkedIn profile"
					   target="_blank">
						<LinkedInIcon/>
					</a>
					<a className="social-button"
					   href={t('hero.gitHubUrl')}
					   title="Visit GitHub profile"
					   target="_blank">
						<GitHubIcon/>
					</a>
				</footer>
			</div>
			<figure className="image-container">
				<img className="image" src={t('hero.imagePath')} alt={t('hero.name')}/>
			</figure>
		</section>
	)
}

export default HeroSection
