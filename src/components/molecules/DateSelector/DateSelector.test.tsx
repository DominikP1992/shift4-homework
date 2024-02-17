import React from 'react';
import '@testing-library/jest-dom';
import DateSelector from '.';
import { fireEvent, render, screen } from '@/tests/testsUtils';

describe('DateSelector', () => {
  const mockDate = new Date('2024-06-15');

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const { container } = render(<DateSelector onChange={() => {}} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const { container } = render(<DateSelector onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows navigating to the next month', () => {
    render(<DateSelector onChange={() => {}} />);

    const nextMonthButton = screen.getAllByRole('button')[1];

    fireEvent.click(nextMonthButton);
    const nextMonthText = screen.getByText(/July/);
    expect(nextMonthText).toBeInTheDocument();
  });

  it('allows navigating to the previous month', () => {
    render(<DateSelector onChange={() => {}} />);

    const prevMonthButton = screen.getAllByRole('button')[0];
    const nextMonthButton = screen.getAllByRole('button')[1];

    fireEvent.click(nextMonthButton);
    fireEvent.click(nextMonthButton);
    const nextMonthText = screen.getByText(/August/);

    expect(nextMonthText).toBeInTheDocument();

    fireEvent.click(prevMonthButton);
    const prevMonthText = screen.getByText(/July/);
    expect(prevMonthText).toBeInTheDocument();
  });

  it('allows navigating to the previous month', () => {
    render(<DateSelector onChange={() => {}} />);

    const prevMonthButton = screen.getAllByRole('button')[0];
    const nextMonthButton = screen.getAllByRole('button')[1];

    fireEvent.click(nextMonthButton);
    fireEvent.click(nextMonthButton);
    const nextMonthText = screen.getByText(/August/);

    expect(nextMonthText).toBeInTheDocument();

    fireEvent.click(prevMonthButton);
    const prevMonthText = screen.getByText(/July/);
    expect(prevMonthText).toBeInTheDocument();
  });

  it('onChange method returns updated date', () => {
    const mockFn = jest.fn();
    render(<DateSelector onChange={mockFn} />);

    const nextMonthButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextMonthButton);

    const expectedDate = new Date(mockDate);
    expectedDate.setMonth(mockDate.getMonth() + 1);

    expect(mockFn).toHaveBeenCalledWith(expectedDate);
  });
});
