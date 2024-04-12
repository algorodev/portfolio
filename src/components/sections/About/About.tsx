import { useTranslation } from 'react-i18next'

const AboutSection = () => {
	const { t } = useTranslation()

	return (
		<section>
			<p>{t('about')}</p>
		</section>
	)
}

export default AboutSection
