import WorldIcon from '../../icons/World.tsx'
import MailIcon from '../../icons/Mail.tsx'
import GitHubIcon from '../../icons/GitHub.tsx'
import LinkedInIcon from '../../icons/LinkedIn.tsx'
import PhoneIcon from '../../icons/Phone.tsx'
import './Hero.scss'

const HeroSection = () => {
	const name: string = 'Alejandro González Romero'
	const label: string = 'Full Stack Developer with more than 5 years of experience'
	const born: string = 'Valencia, España'
	const email: string = 'me@algorodev.com'
	const phone: string = '648183931'
	const linkedInUrl: string = 'https://linkedin.com/in/algorodev'
	const gitHubUrl: string = 'https://github.com/algorodev'
	const imagePath: string = '/me.webp'

	return (
		<section className="container">
			<div className="info-container">
				<h1 className="name">{name}</h1>
				<h2 className="title">{label}</h2>
				<span className="location">
					<WorldIcon/>
					{born}
				</span>
				<footer className="social-container">
					<a className="social-button"
					   href={`mailto:${email}`}
					   title={`Enviar un correo electrónico a ${name} al correo ${email}`}
					   target="_blank"
					   rel="noopener noreferrer">
						<MailIcon/>
					</a>
					<a className="social-button"
					   href={`tel:${phone}`}
					   title={`Llamar por teléfono a ${name} al número ${email}`}
					   target="_blank"
					   rel="noopener noreferrer">
						<PhoneIcon/>
					</a>
					<a className="social-button"
					   href={linkedInUrl}
					   title={`Visitar el perfil de ${name} en LinkedIn`}
					   target="_blank"
					   rel="noopener noreferrer">
						<LinkedInIcon/>
					</a>
					<a className="social-button"
					   href={gitHubUrl}
					   title={`Visitar el perfil de ${name} en GitHub`}
					   target="_blank"
					   rel="noopener noreferrer">
						<GitHubIcon/>
					</a>
				</footer>
			</div>
			<figure className="image-container">
				<img className="image" src={imagePath} alt={name}/>
			</figure>
		</section>
	)
}

export default HeroSection
