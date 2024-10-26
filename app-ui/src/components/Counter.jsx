import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, randomize } from "../redux/actions";

const Counter = ({ id }) => {
	const dispatch = useDispatch();
	const counter = useSelector((state) =>
		state.counters.find((counter) => counter.id === id)
	);

	if (!counter) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Counter: {counter.value}</h1>
			
			<div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
				<button onClick={() => dispatch(increment(id))}>+Increment</button>
				<button onClick={() => dispatch(decrement(id))}>-Decrement</button>
				<button onClick={() => dispatch(randomize(id))}>Randomize</button>
			</div>
		</div>
	);
};

export default Counter;
