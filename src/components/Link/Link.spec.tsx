import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('<Link />', () => {
  it('should render default correctly', () => {
    const { container } = render(<Link href="/">Link</Link>);

    const link = screen.getByRole('link', { name: /link/i });

    expect(container).toMatchSnapshot();
    expect(link).toHaveAttribute('href', '/');
  });
});
