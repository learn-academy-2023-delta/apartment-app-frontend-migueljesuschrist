import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe("<Home />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )})

  it("has home text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {
      name: /welcome to veteran home finder/i
    })).toBeInTheDocument
  })

  it("renders image", () => {
    expect(screen.getByRole('img')).toBeInTheDocument
  })
})