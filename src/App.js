import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux-Toolkit/store";
import IncCount from "./components/IncCount";

function App() {
	return (
		<Provider store={store}>
			<IncCount />
			<IncCount />
		</Provider>
	);
}

export default App;
