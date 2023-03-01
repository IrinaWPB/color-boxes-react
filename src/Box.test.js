import React from 'react'
import { render } from '@testing-library/react'
import Box from './Box'

it('renders without crashing', () => {
    render(<Box />)
})

it('matches the snapshat', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
})

