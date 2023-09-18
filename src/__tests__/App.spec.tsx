import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from '../App.tsx'

vi.mock('../components/Header/Header', () => ({
	__esModule: true,
	default: () => <div>Header</div>
}))

describe('App Component', () => {
	it('should render app as expected', () => {
		render(<App />)

		expect(screen.getByText('Header')).toBeInTheDocument()
		expect(screen.getByText('Content')).toBeInTheDocument()
	})
})
