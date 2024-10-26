import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCounter } from "../redux/actions";
import Counter from "./Counter";

const CounterList = () => {
	const counters = useSelector((state) => state.counters || []);
	const dispatch = useDispatch();
	
	const handleCounterEvent = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}`);
			const initialValue = response.data.initialValue;
			dispatch(addCounter(initialValue));
		} catch (error) {
			console.log("Failed to fetch initial value", error);
		}
	};
	
	return (
		<div style={{ paddingTop: 20 }}>
			<button onClick={handleCounterEvent}>Add Counter</button>
			<div>
				{counters.map((counter) => (
					<Counter key={counter.id} id={counter.id} />
				))}
			</div>
		</div>
	);
};

export default CounterList;
