import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../Redux-Toolkit/countSlice";

const IncCount = () => {
	const count = useSelector((store) => store.count.count);
	const dispatch = useDispatch();

	const handleInc = () => {
		dispatch(incCount());
	};
	const handleDec = () => {
		dispatch(decCount());
	};

	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={handleInc}>Increase Count </button>
			<button onClick={handleDec}>Increase Count </button>
		</div>
	);
};

export default IncCount;
