import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExperienceSection from '../ExperienceSection.tsx'

describe('EducationSection Component', () => {
	it('should render component as expected', () => {
		render(<ExperienceSection />)

		expect(screen.getByText('Experience')).toBeInTheDocument()
	})
})
