import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import useHeader from '../useHeader.tsx'

describe('useHeader Hook', () => {
	it('should return Resume! on contact button click', () => {
		const { result: { current } } = renderHook(() => useHeader())
		const result = current.onResumeButtonClick()

		expect(result).toBe('Resume!')
	})
})
