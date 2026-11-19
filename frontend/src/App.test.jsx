import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ status: 'ok' }) })),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

test('counter button increments on click', async () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  fireEvent.click(button)
  expect(button.textContent).toBe('Count is 1')
  await screen.findByText('API: ok')
})

test('shows the API status returned by /health', async () => {
  render(<App />)
  expect(await screen.findByText('API: ok')).toBeTruthy()
  expect(fetch).toHaveBeenCalledWith('http://localhost:8000/health')
})

test('shows unreachable when the API request fails', async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error('network down')))
  render(<App />)
  expect(await screen.findByText('API: unreachable')).toBeTruthy()
})
