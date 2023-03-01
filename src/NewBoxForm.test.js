import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import NewBoxForm from './NewBoxForm'

it('renders without crashing', () => {
    render(<NewBoxForm />)
})

it('matches the snapshat', () => {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})

it('should show form', () => {
    const { getByText } = render(<NewBoxForm />)
    expect(getByText('Enter width:')).toBeInTheDocument()
    expect(getByText('Enter height:')).toBeInTheDocument()
})
