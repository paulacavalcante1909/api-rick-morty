import { render, screen } from '@testing-library/react';
import CardCharacter from './CardCharacter';

test('renders learn react link', () => {
  render(<CardCharacter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
