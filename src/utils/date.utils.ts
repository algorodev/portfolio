export const getYearsFromDate = () => {
	const initialDate = new Date('2019-04-09')
	const currentDate = new Date()

	let years = currentDate.getFullYear() - initialDate.getFullYear()

	if (currentDate.getMonth() < initialDate.getMonth() ||
		currentDate.getMonth() === initialDate.getMonth() && currentDate.getDate() < initialDate.getDate()) {
		years--
	}

	return years
}
