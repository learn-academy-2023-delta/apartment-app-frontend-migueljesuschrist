import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )})

  it("has not found text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {
      name: /uh oh, we don't have property there! come back home!/i
    })).toBeInTheDocument
  })

  it("renders image", () => {
    expect(screen.getByRole('img')).toBeInTheDocument
  })

  it("has link", () => {
    expect(screen.getByRole('link', {
      name: /come back home!/i
    })).toBeInTheDocument
  })
})