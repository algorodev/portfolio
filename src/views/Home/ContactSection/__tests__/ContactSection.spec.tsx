import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ContactSection from '../ContactSection.tsx'

describe('<ContactSection/>', () => {
	it('should render component as expected', () => {
		render(<ContactSection />)

		expect(screen.getAllByRole('link')).toHaveLength(5)
	})
})
