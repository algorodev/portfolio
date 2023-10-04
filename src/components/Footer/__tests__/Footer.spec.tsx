import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from '../Footer.tsx'

describe('<Footer/>', () => {
	it('should render component as expected', () => {
		render(<Footer />)

		expect(screen.getByText('created by Alejandro Gonzalez Romero')).toBeInTheDocument()
	})
})
