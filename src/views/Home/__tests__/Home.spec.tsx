import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from '../Home.tsx'

vi.mock('../AboutSection/AboutSection', () => ({
	__esModule: true,
	default: () => <div>AboutSection</div>
}))

vi.mock('../ContactSection/ContactSection', () => ({
	__esModule: true,
	default: () => <div>ContactSection</div>
}))

vi.mock('../ExperienceSection/ExperienceSection', () => ({
	__esModule: true,
	default: () => <div>ExperienceSection</div>
}))

vi.mock('../EducationSection/EducationSection', () => ({
	__esModule: true,
	default: () => <div>EducationSection</div>
}))

describe('Home View', () => {
	it('should render view as expected', () => {
		render(<Home />)

		expect(screen.getByText('AboutSection')).toBeInTheDocument()
		expect(screen.getByText('ContactSection')).toBeInTheDocument()
		expect(screen.getByText('ExperienceSection')).toBeInTheDocument()
		expect(screen.getByText('EducationSection')).toBeInTheDocument()
	})
})
