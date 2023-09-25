import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import EducationSection from '../EducationSection.tsx'

describe('EducationSection Component', () => {
	it('should render component as expected', () => {
		render(<EducationSection />)

		expect(screen.getByText('Degrees')).toBeInTheDocument()
		expect(screen.getByText('Certifications')).toBeInTheDocument()
	})
})
