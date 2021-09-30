import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Color history tests', () => {
  it('tests redo and undo functionality for behavior test', () => {
    render(<App />);

    const picker = screen.getByLabelText('color-picker');
    const undo = screen.getByLabelText('undo-button');
    const redo = screen.getByLabelText('redo-button');
    const display = screen.getByLabelText('display');

    const red = '#ff0000';
    const green = '#00ff00';
    const blue = '#0000ff';
    const yellow = '#FFFF00';

    fireEvent.change(picker, { target: { value: red } });
    fireEvent.change(picker, { target: { value: blue } });
    fireEvent.change(picker, { target: { value: green } });
    fireEvent.click(undo);
    fireEvent.click(undo);
    fireEvent.click(redo);
    fireEvent.change(picker, { target: { value: yellow } });
    fireEvent.click(undo);
    fireEvent.click(redo);
    fireEvent.click(redo);
    fireEvent.click(redo);

    expect(picker.value).toBe(green);
    expect(display).toHaveStyle({ 'background-color': green });
  });
});
