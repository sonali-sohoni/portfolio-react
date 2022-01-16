import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {
	HashRouter,
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

function App() {
	return (
		<HashRouter basename="/">
			<div>
				<Header />

				<main className="main ">
					<Switch>
						<Route path="/" exact component={About} />
						<Route path="/about" component={About} />
						<Route path="/projects" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</main>

				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
