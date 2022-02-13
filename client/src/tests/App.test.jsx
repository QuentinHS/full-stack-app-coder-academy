import App from "../App"
import "@testing-library/jest-dom"
import { describe, expect, it, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Appcomponent test", () => {
  it("shows the welcome message", () => {
    render(<App />)
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
  it("displays signup and login buttons", () => {
    render(<App />)
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument()
  })
  it("displays register page when Sign Up button is clicked", () => {
    render(<App />)
    userEvent.click(screen.getByRole("button", { name: "Sign Up" }))
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    
  })
})
