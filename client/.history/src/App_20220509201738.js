import MainHeader from "./components/MainHeader/MainHeader";


function App() {
	return (
		<div className="main_wrapper">
			<MainHeader/>
			<div className="side_bar">
				This is a side bar
			</div>
			<div className="main_content_area">
				This is a main content area
			</div>
		</div>
	);
}

export default App;
