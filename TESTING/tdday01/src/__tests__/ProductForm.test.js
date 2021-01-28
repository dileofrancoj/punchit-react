import { render, screen, fireEvent } from "@testing-library/react";
import { ProductForm } from "./../Components/ProductForm";

beforeEach(() => {
  render(<ProductForm />);
});

describe("when the page is mounted", () => {
  it("should exists a title Create product", () => {
    console.log("Existe un title create product");

    expect(
      screen.getByRole("heading", { name: /create product/i })
    ).toBeInTheDocument();
  });
  it("should be three inputs (name,size, description)", () => {
    // getByLabelText
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });
  it("should exists a submit button", () => {
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();
  });
});

describe("when the user sends the form empty", () => {
  it("should show the validation messages", () => {
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/the description is required/i)
    ).not.toBeInTheDocument();
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(screen.getByText(/the name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/the size is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/the description is required/i)
    ).toBeInTheDocument();
  });
});

describe.only("when the user leaves focus on empty input", () => {
  it("the input name ", () => {
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText(/name/i), {
      target: { value: "" },
    });
    expect(screen.getByText(/the name is required/i)).toBeInTheDocument();
  });
  it("the input size ", () => {
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText(/size/i), {
      target: { value: "" },
    });
    expect(screen.getByText(/the size is required/i)).toBeInTheDocument();
  });
});
