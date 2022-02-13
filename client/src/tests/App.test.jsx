import App from "../App"
import "@testing-library/jest-dom"
import { describe, expect, it, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Home component test", () => {
  it("shows the welcome message", () => {
    render(<App />)

    const headingElement = screen.getByText(/welcome/i)
    expect(headingElement).toBeInTheDocument()
  })
})
