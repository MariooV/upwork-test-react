import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";
import "@testing-library/jest-dom/extend-expect";

describe("Counter component", () => {
  it("renders the initial counter value", () => {
    render(<Counter />);
    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("increments the counter when the increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText("1");
    expect(counterElement).toBeInTheDocument();
  });

  it("decrements the counter when the decrement button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(incrementButton); // Increment to 1
    fireEvent.click(decrementButton); // Decrement to 0

    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("does not allow the counter to go below 0", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("resets the counter to 0 when the reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton); // Increment to 1
    fireEvent.click(resetButton);

    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("updates the counter when CounterFunctionality buttons are clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton); // Increment to 1
    fireEvent.click(decrementButton); // Decrement to 0
    fireEvent.click(resetButton); // Reset to 0

    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });
});
