const useHeader = () => {
	const onContactButtonClick = () => {
		return 'Contact!'
	}

	const onResumeButtonClick = () => {
		return 'Resume!'
	}

	return {
		onContactButtonClick,
		onResumeButtonClick,
	}
}

export default useHeader
