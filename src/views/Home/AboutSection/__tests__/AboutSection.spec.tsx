import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AboutSection from '../AboutSection.tsx'

describe('AboutSection Component', () => {
	it('should render component as expected', () => {
		render(<AboutSection />)

		expect(screen.getByText('About')).toBeInTheDocument()
	})
})
