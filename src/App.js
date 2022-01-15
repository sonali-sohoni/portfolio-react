import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Projects from "./components/projects";
import Test from "./components/Test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Header />

        <main className="main ">
         
					<Switch>
						<Route path="/" exact component={About} />
						<Route path="/about" component={About} />
						<Route path="/projects" component={Projects} />
					</Switch>
				</main>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
