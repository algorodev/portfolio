import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from '../Header.tsx'

describe('<Header/>', () => {
	it('should render component as expected', () => {
		render(<Header />)

		expect(screen.getAllByRole('link')).toHaveLength(5)
	})
})

