import React from 'react';
import { render, fireEvent, screen, getByDisplayValue } from '@testing-library/react';
import TestForm from './TestForm';

test('component should have defualt name if nothing passed as props', () => {
    const { getByDisplayValue } = render(<TestForm />);
    const inputEl = getByDisplayValue(/initial value/i);
    expect(inputEl).toBeInTheDocument();
});

test('component should display value passed as prop', () => {
    const { getByDisplayValue } = render(<TestForm val='parent val' />);
    const inputEl = getByDisplayValue(/parent val/i);
    expect(inputEl).toBeInTheDocument();
});

test('component should react to prop changes', () => {
    const { rerender, getByDisplayValue } = render(<TestForm val='parent val-1' />);
    let inputEl = getByDisplayValue(/parent val-1/i);
    expect(inputEl).toBeInTheDocument();
    rerender(<TestForm val='parent val-2' />);
    inputEl = getByDisplayValue(/parent val-2/i);
    expect(inputEl).toBeInTheDocument();
});

test('button click should update value', () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText(/Update Value/i));
    let inputEl = screen.getByDisplayValue(/updated val/i);
    expect(inputEl).toBeInTheDocument();
});