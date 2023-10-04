import { EnvelopeIcon, LinkIcon, PhoneIcon } from '@heroicons/react/20/solid'
import './ContactSection.scss'

const ContactSection = () => (
	<section id="contact" className="contact__container">
		<h3 className="contact__title">Contact</h3>
		<div className="contact__info-container">
			<div className="social-media">
				<h4 className="contact__subtitle">Social Media</h4>
				<div className="contact__link">
					<LinkIcon className="contact__icon" />
					<a href="">Github</a>
				</div>
				<div className="contact__link">
					<LinkIcon className="contact__icon" />
					<a href="">Linkedin</a>
				</div>
				<div className="contact__link">
					<LinkIcon className="contact__icon" />
					<a href="">Twitter</a>
				</div>
			</div>
			<div className="personal-info">
				<h4 className="contact__subtitle">Personal Info</h4>
				<div className="contact__link">
					<PhoneIcon className="contact__icon" />
					<a href="">Phone Number</a>
				</div>
				<div className="contact__link">
					<EnvelopeIcon className="contact__icon" />
					<a href="">Email</a>
				</div>
			</div>
		</div>
	</section>
)

export default ContactSection
