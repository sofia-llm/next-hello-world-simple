import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page';

describe('Home Page', () => {
  it('should render Hello World text', () => {
    render(<Home />);
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});