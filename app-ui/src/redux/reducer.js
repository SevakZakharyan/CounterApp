import { ADD_COUNTER, INCREMENT, DECREMENT, RANDOMIZE } from './actionTypes';

const initialState = [];

export default function counterReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COUNTER:
			return [
				...state,
				{ id: Date.now(), value: action.payload.initialValue },
			];
		case INCREMENT:
			return state.map(counter =>
				counter.id === action.payload.id
					? { ...counter, value: counter.value + 1 }
					: counter
			);
		case DECREMENT:
			return state.map(counter =>
				counter.id === action.payload.id
					? { ...counter, value: counter.value - 1 }
					: counter
			);
		case RANDOMIZE:
			return state.map(counter =>
				counter.id === action.payload.id
					? { ...counter, value: action.payload.value }
					: counter
			);
		default:
			return state;
	}
}
