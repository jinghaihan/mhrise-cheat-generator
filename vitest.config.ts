import { defineConfig } from 'vitest/config'

// https://github.com/vitest-dev/vitest
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'jsdom',
  },
})
