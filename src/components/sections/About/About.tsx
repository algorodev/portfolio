import { useTranslation } from 'react-i18next'
import { getYearsFromDate } from '../../../utils/date.utils'

const AboutSection = () => {
	const { t } = useTranslation()

	return (
		<section>
			<p>{t('about.paragraph1', { years: getYearsFromDate() })}</p>
			<br/>
			<p>{t('about.paragraph2', { years: getYearsFromDate() })}</p>
			<br/>
			<p>{t('about.paragraph3', { years: getYearsFromDate() })}</p>
		</section>
	)
}

export default AboutSection
