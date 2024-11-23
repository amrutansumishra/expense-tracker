import { fireEvent, render, screen } from '@testing-library/react';
import AlertMessage from "./AlertMessage";

test("should render properly",()=>{
    const mockProps = {
        message:"test",
        action:jest.fn(),
        show:jest.fn(),
        display:true
    }
    render(<AlertMessage {...mockProps}/>)

    const messageElement = screen.getByText(/test/)
    expect(messageElement).toBeInTheDocument()
})
test("cancel button should close the alert",()=>{
    const mockProps = {
        message:"test",
        action:jest.fn(),
        show:jest.fn(),
        display:true
    }
    render(<AlertMessage {...mockProps}/>)

    const cancelButton = screen.getAllByRole('button')
    fireEvent.click(cancelButton[1])
    expect(mockProps.show).toHaveBeenCalled()
})
test("yes button should close the alert and run the action",()=>{
    const mockProps = {
        message:"test",
        action:jest.fn(),
        show:jest.fn(),
        display:true
    }
    render(<AlertMessage {...mockProps}/>)

    const cancelButton = screen.getAllByRole('button')
    fireEvent.click(cancelButton[0])
    expect(mockProps.show).toHaveBeenCalled()
    expect(mockProps.action).toHaveBeenCalled()
})
// test("should have the display block style",()=>{
//     const mockProps = {
//         message:"test",
//         action:jest.fn(),
//         show:jest.fn(),
//         display:true
//     }
//     const {container} = render(<AlertMessage {...mockProps}/>)
// const displytest = container.getElementsByClassName('alert-card')
// console.log(displytest)
//     const style = window.getComputedStyle(displytest)
//     console.log(style)
//     expect(style.display).toBe('block')
// })