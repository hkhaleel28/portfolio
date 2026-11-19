import { afterEach, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

test('counter button increments on click', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  fireEvent.click(button)
  expect(button.textContent).toBe('Count is 1')
})
