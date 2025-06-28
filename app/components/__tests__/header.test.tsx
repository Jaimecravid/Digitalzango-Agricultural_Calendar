import { render, screen } from '@testing-library/react';
import Header from '../header';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Header Component', () => {
  it('renders brand name', () => {
    render(<Header />);
    expect(screen.getByText('Digitalzango')).toBeInTheDocument();
    expect(screen.getByText('Calendário Agrícola')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('🏠 Início')).toBeInTheDocument();
    expect(screen.getByText('📅 Calendário')).toBeInTheDocument();
    expect(screen.getByText('✍️ Blog')).toBeInTheDocument();
  });

  it('renders download app button', () => {
    render(<Header />);
    expect(screen.getByText('📱 Baixar App')).toBeInTheDocument();
  });
});
