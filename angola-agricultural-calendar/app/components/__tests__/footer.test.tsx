import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders footer sections', () => {
    render(<Footer />);
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Suporte')).toBeInTheDocument();
    expect(screen.getByText('Empresa')).toBeInTheDocument();
    expect(screen.getByText('Siga-nos')).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Footer />);
    expect(screen.getByText('Política de Privacidade')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Digitalzango/)).toBeInTheDocument();
    expect(screen.getByText('Desenvolvido por Digitalzango')).toBeInTheDocument();
  });
});
