import "./App.css";
import GitInfo from "./components/GitInfo";
import GitOther from "./components/GitOther";

function App() {
	return (
		<div className="app">
			<h1>Git Tutorial</h1>
			<p>This is my first git tutorial</p>
			<GitInfo />
			<GitOther />
		</div>
	);
}

export default App;
