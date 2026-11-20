import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({ status: 'ok' }) }),
    ),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

test('shows the name as the main heading', async () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Hammad Khaleel' })).toBeTruthy()
  await screen.findByText('API: ok')
})

test('lists the Azure certifications with their certificate numbers', async () => {
  render(<App />)
  expect(screen.getByText('Certificate number H845-4117')).toBeTruthy()
  expect(screen.getByText('Certificate number H861-4983')).toBeTruthy()
  await screen.findByText('API: ok')
})

test('lists the background with the newest layer first', async () => {
  render(<App />)
  const titles = within(screen.getByRole('list', { name: 'Background, newest first' }))
    .getAllByRole('listitem')
    .map((li) => li.querySelector('h3').textContent)
  expect(titles[0]).toBe('DevOps')
  expect(titles.at(-1)).toBe('BS Computer Science')
  await screen.findByText('API: ok')
})

test('shows the API status returned by /health', async () => {
  render(<App />)
  expect(await screen.findByText('API: ok')).toBeTruthy()
  expect(fetch).toHaveBeenCalledWith('http://localhost:8000/health')
})

test('shows unreachable when the API answers with an HTTP error', async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({ ok: false, json: () => Promise.resolve({ detail: 'Not Found' }) }),
  )
  render(<App />)
  expect(await screen.findByText('API: unreachable')).toBeTruthy()
})

test('shows unreachable when the API request fails', async () => {
  fetch.mockImplementationOnce(() => Promise.reject(new Error('network down')))
  render(<App />)
  expect(await screen.findByText('API: unreachable')).toBeTruthy()
})
