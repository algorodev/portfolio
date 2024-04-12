import { about } from '../../../data/cv.json'
import { useTranslation } from 'react-i18next'

const AboutSection = () => {
	const { t } = useTranslation()

	return (
		<section>
			<p>{t('test', { name: 'Alex' })}</p>
			<p>{about.text}</p>
		</section>
	)
}

export default AboutSection
