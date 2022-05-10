import MainHeader from "./components/MainHeader/MainHeader";
import SideBar from "./components/SideBar/SideBar";


function App() {
	return (
		<div className="main_wrapper">
			<MainHeader/>
			<div className="side_bar">
				<SideBar/>
			</div>
			<div className="main_content_area">
				This is a main content area
			</div>
		</div>
	);
}

export default App;
