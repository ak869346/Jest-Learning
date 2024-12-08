import { render, screen } from '@testing-library/react';
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


