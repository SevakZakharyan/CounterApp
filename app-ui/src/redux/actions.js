import { ADD_COUNTER, DECREMENT, INCREMENT, RANDOMIZE } from "./actionTypes";

export const addCounter = (initialValue) => ({
	type: ADD_COUNTER,
	payload: { initialValue },
})

export const increment = (id) => ({
	type: INCREMENT,
	payload: { id },
})

export const decrement = (id) => ({
	type: DECREMENT,
	payload: { id },
})

export const randomize = (id) => ({
	type: RANDOMIZE,
	payload: { id, value: Math.floor(Math.random() * 100) },
})
