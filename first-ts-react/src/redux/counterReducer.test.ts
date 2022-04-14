import React from 'react';
import counterReducer from './counterReducer';

const defaultState = 0;

test('counterReducer should have default state', () => {
    expect(counterReducer(0, '')).toEqual(0);
});

test('counterReducer should handle increment action', () => {
    expect(counterReducer(0, 'INCREMENT')).toEqual(1);
    expect(counterReducer(100, 'INCREMENT')).toEqual(101);
});

test('counterReducer should handle increment action', () => {
    expect(counterReducer(2, 'DECREMENT')).toEqual(1);
});


