import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('Nav component', () => {
  // First Test
  it('renders', () => {
    render(<Nav />);
  });
  // Snapshot Test
  it('matches snapshot', () => {
    // render About
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//the describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested.
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
