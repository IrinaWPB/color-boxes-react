import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import BoxList from './BoxList'

it('renders without crashing', () => {
    render(<BoxList />)
})

it('matches the snapshat', () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

function addBox(boxList, height = "5", width = "5", color = "blue") {
    const heightInput = boxList.getByLabelText("Enter height:");
    const widthInput = boxList.getByLabelText("Enter width:");
    const backgroundInput = boxList.getByLabelText("Enter color:");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a box");
    fireEvent.click(button);
  }

it('shows created elment', () => {
    const boxes = render(<BoxList />)

    //no boxes
    expect(boxes.queryByTestId('blue-5-5')).not.toBeInTheDocument()

    //collect all the changes, clicking button to submit
    addBox(boxes)

    //box with id blue-5-5 shows on screen
    expect(boxes.getByTestId('blue-5-5')).toBeInTheDocument()
})