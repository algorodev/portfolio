import { useTranslation } from 'react-i18next'
import TranslationIcon from '../../icons/Translation.tsx'
import { TranslationButtonProps } from './translationButton.types.ts'
import './TranslationButton.scss'

const TranslationButton = ({ language }: TranslationButtonProps) => {
	const { i18n } = useTranslation()

	const changeLanguage = async () => {
		await i18n.changeLanguage(language)
	}

	return (
		<button className="translation-button" onClick={() => changeLanguage()}>
			<TranslationIcon />
		</button>
	)
}

export default TranslationButton
