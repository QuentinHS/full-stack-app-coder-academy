import App from "../App"
import "@testing-library/jest-dom"
import { describe, expect, it, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("App component test", () => {
  beforeEach(() => {
    render(<App />)
  })
  it("shows the welcome message", () => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
  it("displays signup and login buttons", () => {
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument()
  })
  it("displays register page when Sign Up button is clicked", () => {
    userEvent.click(screen.getByRole("button", { name: "Sign Up" }))
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })
})
