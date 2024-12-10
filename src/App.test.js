import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Check Ankit TestCase', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing with Ankit/i);
  const title = screen.getByTitle("Testing image");
  expect(linkElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Testing Input Box",()=> {
  render(<App/>);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter user name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userid");   
}) 

test("Testing Change Event",()=> {
  render(<App/>);
  let input = screen.getByRole("textbox");
  fireEvent.change(input,{target:{value:'a'}});
  expect(input.value).toBe('a');
})

describe("Checking Basic data",()=> {

  test('Check Ankit TestCase 1', () => {
    render(<App />);
    const linkElement = screen.getByText(/Testing with Ankit/i);
    const title = screen.getByTitle("Testing image");
    expect(linkElement).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Check Ankit TestCase 2', () => {
    render(<App />);
    const linkElement = screen.getByText(/Testing with Ankit/i);
    const title = screen.getByTitle("Testing image");
    expect(linkElement).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Check Ankit TestCase 3', () => {
    render(<App />);
    const linkElement = screen.getByText(/Testing with Ankit/i);
    const title = screen.getByTitle("Testing image");
    expect(linkElement).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  describe("Nested Describe testing",()=> {

    test('Check Ankit TestCase 3', () => {
      render(<App />);
      const linkElement = screen.getByText(/Testing with Ankit/i);
      const title = screen.getByTitle("Testing image");
      expect(linkElement).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  
  })

})


