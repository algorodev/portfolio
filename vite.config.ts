import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    watch: false,
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**'],
      exclude: ['src/main.tsx', 'src/**/*.d.ts', 'src/assets/**'],
      all: true,
      clean: true,
      cleanOnRerun: true,
      skipFull: true,
      preFile: true,
      reportOnFailure: true,
      reporter: ['html', 'lcov', 'text-summary'],
      statements: 80,
      lines: 80,
      branches: 80,
      functions: 80,
    }
  }
})
