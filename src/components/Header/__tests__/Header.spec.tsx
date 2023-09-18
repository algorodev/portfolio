import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Header from '../Header.tsx'

vi.mock('../useHeader.tsx', () => ({
	__esModule: true,
	default: () => <div>useHeader</div>
}))

describe('<Header/>', () => {
	it('should render component as expected', () => {
		render(<Header />)

		expect(screen.getByText('LOGO')).toBeInTheDocument()
		expect(screen.getAllByRole('link')).toHaveLength(4)
		expect(screen.getAllByRole('button')).toHaveLength(2)
	})
})

