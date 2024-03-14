import WorldIcon from '../../icons/World.tsx'
import MailIcon from '../../icons/Mail.tsx'
import GitHubIcon from '../../icons/GitHub.tsx'
import LinkedInIcon from '../../icons/LinkedIn.tsx'
import PhoneIcon from '../../icons/Phone.tsx'
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
				   title={`Enviar un correo electrónico a ${hero.name} al correo ${hero.email}`}
				   target="_blank"
				   rel="noopener noreferrer">
					<MailIcon/>
				</a>
				<a className="social-button"
				   href={`tel:${hero.phone}`}
				   title={`Llamar por teléfono a ${hero.name} al número ${hero.email}`}
				   target="_blank"
				   rel="noopener noreferrer">
					<PhoneIcon/>
				</a>
				<a className="social-button"
				   href={hero.linkedInUrl}
				   title={`Visitar el perfil de ${hero.name} en LinkedIn`}
				   target="_blank"
				   rel="noopener noreferrer">
					<LinkedInIcon/>
				</a>
				<a className="social-button"
				   href={hero.gitHubUrl}
				   title={`Visitar el perfil de ${hero.name} en GitHub`}
				   target="_blank"
				   rel="noopener noreferrer">
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
