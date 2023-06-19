import { render, screen } from '@testing-library/react';

import { siteConfig } from '@/config';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render default correctly', () => {
    render(<Footer />);

    const rights = screen.getByText(/todos os direitos /i);

    const title = screen.getByText(siteConfig.title);

    expect(rights).toBeVisible();

    expect(title).toBeVisible();
  });
});
