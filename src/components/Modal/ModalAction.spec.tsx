import { act, render, screen } from '@testing-library/react';

import { ModalAction } from './ModalAction';

const onClick = jest.fn();

describe('ModalAction', () => {
  it('should render successfully', () => {
    render(<ModalAction>Save</ModalAction>);

    const element = screen.getByText(/save/i);

    expect(element).toBeVisible();
  });

  it('should to call onClick function', () => {
    render(<ModalAction onClick={onClick}>Save</ModalAction>);

    const element = screen.getByText(/save/i);

    act(() => {
      element.click();
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('Colors', () => {
    it('should have default color', () => {
      const { container } = render(<ModalAction>Save</ModalAction>);

      expect(container.firstChild).toHaveClass('bg-transparent');
    });

    it('should have green color', () => {
      const { container } = render(
        <ModalAction color="success">Save</ModalAction>
      );

      expect(container.firstChild).toHaveClass('bg-green-500');
    });

    it('should have red color', () => {
      const { container } = render(
        <ModalAction color="error">Save</ModalAction>
      );

      expect(container.firstChild).toHaveClass('bg-red-500');
    });

    it('should have yellow color', () => {
      const { container } = render(
        <ModalAction color="warning">Save</ModalAction>
      );

      expect(container.firstChild).toHaveClass('bg-yellow-500');
    });

    it('should have blue color', () => {
      const { container } = render(
        <ModalAction color="info">Save</ModalAction>
      );

      expect(container.firstChild).toHaveClass('bg-blue-500');
    });
  });
});
