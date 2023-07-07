import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe("<Footer />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )})

  it("has footer text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /veteran home finder/i
    })).toBeInTheDocument
  })

  it("has footer text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /miguel \| jesus \| chris/i
    })).toBeInTheDocument
  })
})
