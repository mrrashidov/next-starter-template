import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', async () => {
  vi.spyOn(console, 'warn')
  it('should render the input', () => {
    render(
      <Input
        name="email"
        type="email"
        error={undefined}
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />
    )
    expect(screen.getByText('Email Address')).toBeDefined()
    expect(screen.getByPlaceholderText('Email')).toBeDefined()
  })
})
