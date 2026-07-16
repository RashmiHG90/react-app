import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InvoiceDetails } from './InvoiceDetails'

describe("InvoiceDetails", () => {

    const defaultProps = {
        invoiceNumber: "INV100-250",
        customerName: "Test Inc.",
        amount: 95.23,
        dueDate: "09 October 2027",
        taxRate: 0.30,
        status: "paid"
    }

    it("renders all invoice fields correctly", () => {

        render(<InvoiceDetails {...defaultProps} />);

        expect(screen.getByText("#Invoice:INV100-250")).toBeInTheDocument()
        expect(screen.getByText("Customer:Test Inc.")).toBeInTheDocument()
        expect(screen.getByText("Amount: $95.23")).toBeInTheDocument()
        expect(screen.getByText("Tax Rate: 30%")).toBeInTheDocument()
        expect(screen.getByText("Total: $123.80")).toBeInTheDocument()
        expect(screen.getByText("paid")).toBeInTheDocument()
        expect(screen.getByText("Due Date: 09 October 2027")).toBeInTheDocument()
    })

    it("adds class 'paid' when invoice is paid", () => {

        const { container } = render(<InvoiceDetails {...defaultProps} />);
        const statusElement = container.querySelector('.status')

        expect(statusElement).toBeInTheDocument();
        expect(statusElement.classList.contains('paid')).toBe(true);

    })

    it("adds class 'overdue' when invoice is overdue", () => {

        const modiefiedProps = { ...defaultProps, status: 'overdue' }
        const { container } = render(<InvoiceDetails {...modiefiedProps} />);
        const statusElement = container.querySelector('.status')

        expect(statusElement).toBeInTheDocument();
        expect(statusElement.classList.contains('overdue')).toBe(true);

    })
})