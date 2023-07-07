import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe("<Header />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )})

  it("has header text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /home/i
    })).toBeInTheDocument
  })

  it("has header text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /listings/i
    })).toBeInTheDocument
  })

  it("has header text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /sign in/i
    })).toBeInTheDocument
  })

  it("has header text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument
  })
})



