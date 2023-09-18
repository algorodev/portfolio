const useHeader = () => {
	const onContactButtonClick = () => {
		console.log('Contact!')
	}

	const onResumeButtonClick = () => {
		console.log('Resume!')
	}

	return {
		onContactButtonClick,
		onResumeButtonClick,
	}
}

export default useHeader
