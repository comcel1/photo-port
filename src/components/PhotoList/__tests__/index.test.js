import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
  test('renders', () => {
    render(<PhotoList />);
  });

  test('render matches snapshot', () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
