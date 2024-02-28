import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from '../App.tsx'

vi.mock('../views/Home/Home', () => ({
	__esModule: true,
	default: () => <div>Home</div>
}))

describe('App Component', () => {
	it('should render app as expected', () => {
		render(<App />)
		expect(screen.getByText('Footer')).toBeInTheDocument()
	})
})
