import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from '../Home.tsx'

vi.mock('../EducationSection/EducationSection', () => ({
	__esModule: true,
	default: () => <div>EducationSection</div>
}))

describe('Home View', () => {
	it('should render view as expected', () => {
		render(<Home />)

		expect(screen.getByText('EducationSection')).toBeInTheDocument()
	})
})
