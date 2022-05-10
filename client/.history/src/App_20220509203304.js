import MainHeader from "./components/MainHeader/MainHeader";
import SideBar from "./components/SideBar/SideBar";
import './App.css';

function App() {
	return (
		<div className="main_wrapper">
			<MainHeader/>
			<div className="wrap_inner_data">
				<div className="side_bar">
					<SideBar/>
				</div>
				<div className="main_content_area">
					Content will be here
				</div>
			</div>
		</div>
	);
}

export default App;
