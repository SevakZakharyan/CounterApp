import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import CounterList from "../src/components/CounterList";
import Counter from "../src/components/Counter";
import counterReducer from "../src/redux/reducer";
import { act } from "react";

const createTestStore = (preloadedState) => configureStore({
	reducer: {
		counters: counterReducer,
	},
	preloadedState,
});

const renderWithProvider = (ui, store) => {
	return render(<Provider store={store}>{ui}</Provider>);
};

describe("CounterList Component", () => {
	let store;
	const initialValue = 10;
	
	beforeEach(() => {
		store = createTestStore({
			counters: [],
		});

		spyOn(axios, 'get').and.returnValue(Promise.resolve({ data: { initialValue } }));
	});
	
	it("renders and adds a new counter with the initial value from the API", async () => {
		renderWithProvider(<CounterList />, store);
		
		await act(async () => {
			fireEvent.click(screen.getByText('Add Counter'));
		});
		
		const counterValue = await screen.findByText('Counter: 10');
		expect(counterValue).toBeTruthy();
		expect(screen.getAllByText(/Counter:/).length).toBe(1);
	});
});

describe("Counter Component", () => {
	let store;
	const initialValue = 10;
	
	beforeEach(() => {
		store = createTestStore({
			counters: [{ id: 1, value: initialValue }],
		});
	});
	
	it("renders initial counter value", () => {
		renderWithProvider(<Counter id={1} />, store);
		expect(screen.getByText(`Counter: ${initialValue}`)).toBeTruthy();
	});
	
	it("increments the counter value", () => {
		renderWithProvider(<Counter id={1} />, store);
		fireEvent.click(screen.getByText('+Increment'));
		
		expect(screen.getByText(`Counter: ${initialValue + 1}`)).toBeTruthy();
	});
	
	it("decrements the counter value", () => {
		renderWithProvider(<Counter id={1} />, store);
		fireEvent.click(screen.getByText('-Decrement'));
		
		expect(screen.getByText(`Counter: ${initialValue - 1}`)).toBeTruthy();
	});
	
	it("randomizes the counter value", () => {
		renderWithProvider(<Counter id={1} />, store);
		fireEvent.click(screen.getByText('Randomize'));
		
		const counterValue = screen.getByText(/Counter: \d+/);
		expect(counterValue).toBeTruthy();
	});
});
